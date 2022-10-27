import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import PinterestIcon from "@mui/icons-material/Pinterest"
import TwitterIcon from "@mui/icons-material/Twitter"
import PlaceIcon from "@mui/icons-material/Place"
import LanguageIcon from "@mui/icons-material/Language"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import MoreVertIcon from "@mui/icons-material/MoreVert"

import { Posts } from "../../components"

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__top">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="profile__cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profile__user-image"
        />
      </div>
      <div className="profile__container">
        <div className="profile__info">
          <div className="profile__user-socials">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="profile__user-description">
            <h1 className="profile__user-name">John Doe</h1>
            <p className="profile__user-title">Web Developer</p>

            <p className="profile__user-location">
              <PlaceIcon fontSize="small" /> NY, USA
            </p>
            <p className="profile__user-website">
              <LanguageIcon fontSize="small" /> www.johndoe.com
            </p>

            <button>Follow</button>
          </div>
          <div className="profile__user-links">
            <div className="profile__user-email">
              <EmailOutlinedIcon />
            </div>
            <div className="profile__user-more">
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile
