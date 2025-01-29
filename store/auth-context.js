import { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  token: '',
  displayName: '',
  userId: '',
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
})

function AuthContextProvider({children}) {
  const [authToken, setAuthToken] = useState(null)
  const [displayName, setDisplayName] = useState('')
  const [userId, setUserId] = useState('')

  function authenticate(token, displayName, userId) {
    setAuthToken(token)
    setDisplayName(displayName)
    setUserId(userId)
    AsyncStorage.setItem('authToken', token)
    AsyncStorage.setItem('displayName', displayName)
    AsyncStorage.setItem('userId', userId)
  }
  function logout() {
    setAuthToken(null)
    setDisplayName('')
    setUserId('')
    AsyncStorage.removeItem('authToken')
    AsyncStorage.removeItem('displayName')
    AsyncStorage.removeItem('userId')
  }
  const value = {
    token: authToken,
    displayName: displayName,
    isAuthenticated: !!authToken,
    userId: userId,
    authenticate: authenticate,
    logout: logout
  }
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )

}

export default AuthContextProvider