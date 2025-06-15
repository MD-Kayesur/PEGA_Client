import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuData from "../../../public/menue.json";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import logoimg from "../../images/logo/pega_logo.png";
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const [serch, setserch] = useState(false);

  const clickserxh = () => {
    setserch(!serch);
  };
  return (
    <div className="w-full   ">
      {/* Topbar */}
      <div className="flex justify-between items-center p-4 lg:hidden">
        <div>
          <img className="w-50" src={logoimg} alt="" />
        </div>
        <FaSearch
          onClick={clickserxh}
          className="text-4xl hover:cursor-pointer"></FaSearch>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {/* {serch && (
        <div className="bg-base-300 absolute w-full flex justify-center py-5">
          <input type="text" placeholder="Type here" className="input" />
        </div>
      )} */}

      {mobileMenuOpen && (
        <div className="lg:hidden z-50 absolute w-full bg-blue-300">
          {menuData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <div className="flex justify-between items-center px-4 py-3">
                <Link to={`/${item.src || ""}`}>{item.menu}</Link>
                {item.sub && (
                  <button onClick={() => handleSubMenuToggle(index)}>
                    <MdKeyboardArrowDown
                      className={`transform transition-transform ${
                        openSubMenu === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {item.sub && openSubMenu === index && (
                <div className="pl-8 pb-3">
                  {item.sub.map((subItem, subIndex) => (
                    <div key={subIndex}>
                      <Link to={`/${subItem.src || ""}`} className="block py-1">
                        {subItem.menu}
                      </Link>

                      {/* Nested sub for mobile */}
                      {subItem.sub && (
                        <div className="pl-4 text-sm text-gray-700">
                          {subItem.sub.map((deepItem, deepIndex) => (
                            <Link
                              key={deepIndex}
                              to={`/${deepItem.src || ""}`}
                              className="block py-1">
                              {deepItem.menu}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden navbar lg:flex justify-center items-center px-6 pb-2">
        <div className="navbar-start">
          <img className="w-50" src={logoimg} alt="" />
        </div>

       <div className="navbar-center">
         {menuData.map((item, index) => (
          <div key={index} className="relative group">
            <Link
              to={`/${item.src || ""}`}
              className="flex items-center mx-3 font-semibold text-gray-700 hover:text-green-500 transition-colors">
              {item.menu} {!item.src && <MdKeyboardArrowDown />}
            </Link>

            {item.sub && (
              <div
                className={`absolute left-0 top-full mt-2 p-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
                ${item.menu === "Shop" ? "lg:-ml-40" : "lg:-left-40"}
                ${item.menu === "Contact" ? "hidden" : ""}
                w-screen sm:w-64`}>
                <div
                  className={`flex ${
                    item.menu === "Shop" || item.menu === "Elements"
                      ? "flex"
                      : "flex-col"
                  }`}>
                  {item.sub.map((subItem, subInd) => (
                    <div key={subInd} className="bg-white px-3">
                      <Link
                        to={`/${subItem.src || ""}`}
                        className={`block text-gray-600 hover:text-green-500 ${
                          subItem.sub ? "font-bold" : " pb-1"
                        }`}>
                        {subItem.menu}
                      </Link>

                      {subItem.sub && (
                        <div className="mt-1 w-40">
                          {subItem.sub.map((deepItem, deepInd) => (
                            <Link
                              key={deepInd}
                              to={`/${deepItem.src || ""}`}
                              className="block text-gray-500 hover:text-green-600 font-semibold text-sm pt-2">
                              {deepItem.menu}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
       </div>
       <div className=" navbar-end flex items-center gap-10">
           <FaSearch
          onClick={clickserxh}
          className="text-4xl hover:cursor-pointer"></FaSearch>

         <button className="btn hidden lg:block bg-blue-400 text-white hover:shadow-md">
            Try Pega
          </button>
       </div>
      </div>
        {serch && (
        <div className="bg-base-300 absolute w-full flex justify-center py-5">
          <input type="text" placeholder="Type here" className="input" />
        </div>
      )}
    </div>
  );
};

export default Navigation;
