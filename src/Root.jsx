import { Outlet } from "react-router-dom"
import Footer from "../src/Components/Footer/Footer.jsx"
import Navbar from "../src/Components/Navbar/Navbar.jsx"

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
