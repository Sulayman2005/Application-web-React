import { Outlet } from "react-router-dom"
import Navbar from "../src/Components/Navbar/Navbar.jsx"
import Footer from "../src/Components/Footer/Footer.jsx"

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
