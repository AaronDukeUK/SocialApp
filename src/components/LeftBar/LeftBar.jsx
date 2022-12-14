import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

import Friends from "../../assets/1.png"
import Groups from "../../assets/2.png"
import Market from "../../assets/3.png"
import Watch from "../../assets/4.png"
import Memories from "../../assets/5.png"
import Events from "../../assets/6.png"
import Gaming from "../../assets/7.png"
import Gallery from "../../assets/8.png"
import Videos from "../../assets/9.png"
import Messages from "../../assets/10.png"
import Tutorials from "../../assets/11.png"
import Courses from "../../assets/12.png"
import Fund from "../../assets/13.png"

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <aside className="leftbar">
      <div className="leftbar__container">
        <div className="leftbar__menu">
          <div className="leftbar__user">
            <img src={currentUser.avatar} alt="avatar" />
            <span>{currentUser.name}</span>
          </div>
          <div className="leftbar__item">
            <img src={Friends} alt="friends" />
            <span>Friends</span>
          </div>
          <div className="leftbar__item">
            <img src={Groups} alt="Groups" />
            <span>Groups</span>
          </div>
          <div className="leftbar__item">
            <img src={Market} alt="Market" />
            <span>Market</span>
          </div>
          <div className="leftbar__item">
            <img src={Watch} alt="Watch" />
            <span>Watch</span>
          </div>
          <div className="leftbar__item">
            <img src={Memories} alt="Memories" />
            <span>Memories</span>
          </div>
        </div>
        <hr className="leftbar__hr" />
        <div className="leftbar__menu">
          <h4 className="leftbar__title">Your Shortcuts</h4>
          <div className="leftbar__item">
            <img src={Events} alt="Events" />
            <span>Events</span>
          </div>
          <div className="leftbar__item">
            <img src={Gaming} alt="Gaming" />
            <span>Gaming</span>
          </div>
          <div className="leftbar__item">
            <img src={Gallery} alt="Gallery" />
            <span>Gallery</span>
          </div>
          <div className="leftbar__item">
            <img src={Videos} alt="Videos" />
            <span>Videos</span>
          </div>
          <div className="leftbar__item">
            <img src={Messages} alt="Messages" />
            <span>Messages</span>
          </div>
        </div>
        <hr className="leftbar__hr" />
        <div className="leftbar__menu">
          <h4 className="leftbar__title">Others</h4>
          <div className="leftbar__item">
            <img src={Fund} alt="Fund" />
            <span>Fund</span>
          </div>
          <div className="leftbar__item">
            <img src={Tutorials} alt="Tutorials" />
            <span>Tutorials</span>
          </div>
          <div className="leftbar__item">
            <img src={Courses} alt="Courses" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default LeftBar
