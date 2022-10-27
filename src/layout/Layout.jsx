import { useContext } from "react"
import { Outlet } from "react-router-dom"

import { ThemeContext } from "../context/themeContext"

import { Navbar, LeftBar, RightBar } from "../components"

const Layout = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`layout theme-${theme}`}>
      <Navbar />
      <div className="layout__container">
        <LeftBar />
        <div className="layout__content">
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  )
}

export default Layout
