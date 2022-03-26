import Logo from "~/assets/logo.png";
import { NavLink } from "remix";
import { Menu } from "~/components";

function Sidebar() {
  return (
    <div id="sidebar" className="flex-col dark:bg-brand dark:text-white shadow-xl px-4 lg:flex hidden absolute w-full h-[95vh] z-30 justify-center items-center bottom-0 lg:static lg:w-fit lg:h-full bg-white sm:h-[92vh] md:h-[95vh]">
      <NavLink to="/" className="my-8 w-48 mx-auto relative">
        <img src={Logo} alt="Sidebar" className="w-full" />
        <small className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs dark:text-gray-100 font-semibold text-primary">
          To The Best
        </small>
      </NavLink>
      <Menu />
    </div>
  );
}

export default Sidebar;
