import { RouterProvider } from "react-router-dom"

import router from "./utilities/router"

import "./sass/main.scss"

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
