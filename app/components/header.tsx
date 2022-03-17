import React from "react";
import {IoMdMoon} from "react-icons/io";
import {MdOutlineLightMode} from "react-icons/md";

const Header = () => {
    const [theme, setTheme] = React.useState(false);

    const handleChangeTheme = () => {
        setTheme(!theme);
    };

    return (
        <header className="bg-gradient-to-b from-primary to-secondary px-4 py-2 text-center flex items-center justify-between">
            <button className="" onClick={handleChangeTheme}>
                {
                    theme ? <IoMdMoon size={24} className="text-light"/> : <MdOutlineLightMode size={24} className="text-brandYellow"/>
                }
            </button>
            <div className="flex flex-1 w-full">
                <input
                    type="text"
                    placeholder="Search movie!"
                    className="bg-white focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 block appearance-none leading-normal w-1/4 ml-auto focus:w-1/2 transition-all duration-300 outline-none text-gray-400"
                />
            </div>
        </header>
    );
};

export default Header;
