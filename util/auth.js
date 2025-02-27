import axios from "axios";
import { Alert } from "react-native";

const FIREBASE_KEY = 'AIzaSyDSti_hrIG3icHffHp-F5ZsO5D8JqILBEY'

async function authenticate(mode, email, password, name=null) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${FIREBASE_KEY}`;

  const payload = {
    email,
    password,
    returnSecureToken: true,
  }
  if (mode === 'signUp') {
    payload.displayName = name
  }
  try {
    const response = await axios.post(url, payload);
    const token = response.data.idToken
    const displayName = response.data.displayName || name
    const userId = response.data.localId
    return {token , displayName, userId}
  } catch (error) {
    Alert.alert('An Error Occurred!', error.response.data.error.message, [{ text: 'Okay' }]);
  }
}

export function createUser(name, email, password) {
  return authenticate('signUp', email, password, name) 
}

export function logIn(email, password) {
  return authenticate('signInWithPassword', email, password)
  
}


