import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      localStorage.setItem("theme", "dark")
    } else {
      setTheme("light")
      localStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
