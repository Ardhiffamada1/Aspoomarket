import { Outlet } from "react-router-dom";
import Navbar from "../props/Navigation";

const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
};

export default Layout;