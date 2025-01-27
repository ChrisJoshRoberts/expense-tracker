import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: '',
  displayName: '',
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
})

function AuthContextProvider({children}) {
  const [authToken, setAuthToken] = useState(null)
  const [displayName, setDisplayName] = useState('test')

  function authenticate(token, displayName) {
    setAuthToken(token)
    setDisplayName(displayName)
  }
  function logout() {
    setAuthToken(null)
    setDisplayName('')
  }
  const value = {
    token: authToken,
    displayName: displayName,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout
  }
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )

}

export default AuthContextProvider