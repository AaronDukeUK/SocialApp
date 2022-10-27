import { useContext } from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"
import { Home, Profile, Login, Register } from "../pages"
import Layout from "../layout"

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext)
  if (!currentUser) {
    return <Navigate to="/login" />
  }

  return children
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile/:id",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
])

export default router
