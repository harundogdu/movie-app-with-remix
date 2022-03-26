import Logo from "~/assets/logo.png";
import { NavLink } from "remix";
import { Menu } from "~/components";

function Sidebar() {
  return (
    <div className="flex-col dark:bg-brand dark:text-white shadow-xl px-4 hidden lg:flex">
    <NavLink to="/" className="my-8 w-48 mx-auto relative">
        <img src={Logo} alt="Sidebar" className="w-full" />
        <small className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs dark:text-gray-100">
          Keyfime Göre
        </small>
      </NavLink>
      <Menu />
    </div>
  );
}

export default Sidebar;
