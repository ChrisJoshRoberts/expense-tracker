import { createContext, useState } from "react";

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

  function authenticate(token, displayName) {
    setAuthToken(token)
    setDisplayName(displayName)
    setUserId(userId)
  }
  function logout() {
    setAuthToken(null)
    setDisplayName('')
    setUserId('')
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