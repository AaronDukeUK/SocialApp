import { useContext } from "react"
import { Link } from "react-router-dom"

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"

import { ThemeContext } from "../../context/themeContext"
import { AuthContext } from "../../context/authContext"

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { currentUser } = useContext(AuthContext)
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <span className="navbar__logo">ADSOCIAL</span>
        </Link>
        <Link to="/">
          <HomeOutlinedIcon className="navbar__icon" />
        </Link>
        {theme === "light" ? (
          <DarkModeOutlinedIcon
            className="navbar__icon"
            onClick={toggleTheme}
          />
        ) : (
          <WbSunnyOutlinedIcon className="navbar__icon" onClick={toggleTheme} />
        )}
        <GridViewOutlinedIcon className="navbar__icon" />
        <div className="navbar__search">
          <SearchOutlinedIcon className="navbar__searchIcon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="navbar__right">
        <PersonOutlinedIcon className="navbar__icon" />
        <EmailOutlinedIcon className="navbar__icon" />
        <NotificationsOutlinedIcon className="navbar__icon" />
        <Link to={`/profile/${currentUser.userId}`}>
          <div className="navbar__user">
            <img src={currentUser.avatar} alt="avatar" />
            <span>{currentUser.name}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
