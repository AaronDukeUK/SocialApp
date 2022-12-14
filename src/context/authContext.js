import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {
      id: 1,
      name: "John Doe",
      avatar: "https://www.fillmurray.com/50/50",
      img: "https://www.fillmurray.com/400/200",
    }
  )

  const login = () => {
    //TODO
    setCurrentUser({
      id: 1,
      name: "John Doe",
      avatar: "https://www.fillmurray.com/50/50",
      img: "https://www.fillmurray.com/400/200",
    })
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  )
}
