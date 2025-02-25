import { Outlet } from "react-router-dom"
import Footer from "../src/Components/Footer/Footer.jsx"

const Root = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root;
