import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

const Stories = () => {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ]

  return (
    <div className="stories">
      <div className="story">
        <img
          className="story__image"
          src={currentUser.img}
          alt={currentUser.name}
        />
        <span className="story__name">{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img className="story__image" src={story.img} alt={story.name} />
          <span className="story__name">{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
