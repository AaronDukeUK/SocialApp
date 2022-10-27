import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="card__left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />

            <button>Register</button>
          </form>
        </div>
        <div className="card__right">
          <h1>AD Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ipsam repellendus veritatis deserunt, esse sunt ut quas dicta
            repellat? Repudiandae!
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
