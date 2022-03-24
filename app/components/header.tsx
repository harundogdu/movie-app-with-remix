import React from "react";
import { IoMdMoon } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="bg-gradient-to-b from-primary to-secondary px-8 py-2 text-center flex items-center justify-between">
      <button className="" onClick={toggleTheme}>
        {darkMode ? (
          <IoMdMoon size={24} className="text-light" />
        ) : (
          <MdOutlineLightMode size={24} className="text-brandYellow" />
        )}
      </button>
      <div className="flex flex-1 w-full">
        <input
          type="text"
          placeholder="Search movie!"
          className="bg-white focus:shadow-outline border border-gray-300  py-2 px-4 block appearance-none leading-normal w-1/4 ml-auto focus:w-1/2 transition-all duration-300 outline-none text-gray-400"
        />
      </div>
    </header>
  );
};

export default Header;
