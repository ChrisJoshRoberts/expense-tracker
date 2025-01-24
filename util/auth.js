import axios from "axios";

const FIREBASE_KEY = 'AIzaSyDSti_hrIG3icHffHp-F5ZsO5D8JqILBEY'

async function authenticate(mode, email, password, name=null) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${FIREBASE_KEY}`;

  const payload = {
    email,
    password,
    returnSecureToken: true,
  }
  if (mode === 'signUp') {
    payload.name = name
  }

  try {
    const response = await axios.post(url, payload);
    console.log(response.data);
    return response.data; // Return the response if needed
  } catch (error) {
    console.error('Authentication error:', error.response?.data || error.message);
    throw error; // Rethrow to handle it in your UI
  }
}

export async function createUser(name, email, password) {
  await authenticate('signUp', email, password, name)
}

export async function logIn(email, password) {
  const formattedEmail = email.trim()
  await authenticate('signInWithPassword', email, password)
  
}


