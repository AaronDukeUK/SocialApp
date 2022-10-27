const RightBar = () => {
  return (
    <aside className="rightbar">
      <div className="rightbar__container">
        <div className="rightbar__item">
          <h3 className="rightbar__title">Suggestions For You</h3>

          <div className="rightbar__user">
            <div className="rightbar__user-info">
              <img src="https://www.fillmurray.com/50/50" alt="avatar" />
              <span>Jane Doe</span>
            </div>
            <div className="rightbar__user-buttons">
              <button className="rightbar__user-button">Follow</button>
              <button className="rightbar__user-button">Remove</button>
            </div>
          </div>

          <div className="rightbar__user">
            <div className="rightbar__user-info">
              <img src="https://www.fillmurray.com/50/50" alt="avatar" />
              <span>Jane Doe</span>
            </div>
            <div className="rightbar__user-buttons">
              <button className="rightbar__user-button">Follow</button>
              <button className="rightbar__user-button">Remove</button>
            </div>
          </div>
        </div>

        <div className="rightbar__item">
          <h3 className="rightbar__title">Latest Activities</h3>

          <div className="rightbar__user">
            <div className="rightbar__user-info">
              <img src="https://www.fillmurray.com/50/50" alt="avatar" />
              <p>
                <span>Jane Doe </span>
                changed their profile picture
              </p>
            </div>
            <span className="rightbar__time">1 min ago</span>
          </div>

          <div className="rightbar__user">
            <div className="rightbar__user-info">
              <img src="https://www.fillmurray.com/50/50" alt="avatar" />
              <p>
                <span>Jane Doe </span>
                liked a post
              </p>
            </div>
            <span className="rightbar__time">4 min ago</span>
          </div>

          <div className="rightbar__user">
            <div className="rightbar__user-info">
              <img src="https://www.fillmurray.com/50/50" alt="avatar" />
              <p>
                <span>Jane Doe </span>
                liked a comment
              </p>
            </div>
            <span className="rightbar__time">10 min ago</span>
          </div>
        </div>

        <div className="rightbar__item">
          <h3 className="rightbar__title">Online Users</h3>

          <div className="rightbar__user">
            <div className="rightbar__user-info">
              <img src="https://www.fillmurray.com/50/50" alt="avatar" />
              <div className="rightbar__user-online" />
              <span>Jane Doe</span>
            </div>
          </div>

          <div className="rightbar__user">
            <div className="rightbar__user-info">
              <img src="https://www.fillmurray.com/50/50" alt="avatar" />
              <div className="rightbar__user-online" />
              <span>Jane Doe</span>
            </div>
          </div>

          <div className="rightbar__user">
            <div className="rightbar__user-info">
              <img src="https://www.fillmurray.com/50/50" alt="avatar" />
              <div className="rightbar__user-online" />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default RightBar
