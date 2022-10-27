import { useContext } from "react"

import { AuthContext } from "../../context/authContext"

const Comments = () => {
  const { currentUser } = useContext(AuthContext)
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]
  return (
    <div className="comments">
      <div className="comments__add">
        <img className="comment__image" src={currentUser.avatar} alt="" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img className="comment__image" src={comment.profilePicture} alt="" />
          <div className="comment__details">
            <span className="comment__name">{comment.name}</span>
            <p className="comment__description">{comment.desc}</p>
          </div>
          <span className="comment__date">1 hour ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comments
