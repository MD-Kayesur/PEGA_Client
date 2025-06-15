import { Link, NavLink } from "react-router-dom";
import logoimg from "../images/logo/pega_logo.png";
import { FaDropbox, FaSearch } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import Navigation from "./Navigation/Navigation";
import { useState } from "react";
import { AiOutlineX } from "react-icons/ai";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
const [serch,setserch]=useState(false)
 
const clickserxh=()=>{
  setserch(!serch)
}
   
  return (
    <div>
      <div className="flex justify-evenly items-center">
        <div>
          <img className="w-50" src={logoimg} alt="" />
        </div>
        {/* <div>
          <ul className="md:flex gap-10">{ }</ul>
        </div> */}

        <div className="hidden lg:block">
          <Navigation></Navigation>
        </div>

        {/* {isOpen && <Navigation />} */}

        <div className="flex gap-10">
          <FaSearch onClick={clickserxh} className="text-4xl hover:cursor-pointer"></FaSearch>
         {
            !isOpen ? (
              <FiAlignJustify
                onClick={toggleMenu}
                className="text-4xl cursor-pointer lg:hidden"
              />
            ) : (
              <AiOutlineX
                onClick={toggleMenu}
                className="text-4xl cursor-pointer lg:hidden"
              />
            )
          }
          <button className="btn hidden lg:block bg-blue-400 text-white hover:shadow-md">
            Try Pega
          </button>
        </div>
      </div>
      {/* Mobile Navigation (when isOpen true) */}
    {isOpen && (
        <div className="lg:hidden   mt-2">
          <Navigation />
        </div>
      )}

      {
        serch && (
          <div className="bg-base-300  flex justify-center py-5">
         <input type="text" placeholder="Type here" className="input" />
          </div>
        )
      }
    </div>
  );
};

export default Navbar;
