import { CgChevronRight } from "react-icons/cg";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AiTwotoneSound } from "react-icons/ai";
import Innovation from "../Pages/Home/Innovation";
import { Outlet } from "react-router-dom";
import { Menus } from "../Components/Menus";
import Navigation from "../Components/Navigation/Navigation";
import Practice from "../Components/Practice";

const MainLayout = () => {
  return (
    <div className="overflow-hidden">
      {/* <Navbar></Navbar> */}
      {/* <Practice></Practice> */}
      <Navigation></Navigation>

      {/* <Menus></Menus> */}
      <div className=" ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
