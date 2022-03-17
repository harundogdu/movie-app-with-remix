import Logo from '~/assets/logo.png';
import {NavLink} from "remix";
import Menu from "~/components/menu";

function Sidebar() {
    return (
        <div className="flex flex-col bg-light shadow-xl px-8">
            <NavLink to="/" className="my-8 w-48 mx-auto relative">
                <img src={Logo} alt="Sidebar" className="w-full"/>
                <small className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-500">
                    Keyfime Göre
                </small>
            </NavLink>

            <Menu/>
        </div>
    );
}

export default Sidebar;