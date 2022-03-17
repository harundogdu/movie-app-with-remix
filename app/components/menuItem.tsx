import {NavLink} from "remix";

interface MenuItemProps {
    links: MenuItemLinks[];
    title: string;
}

interface MenuItemLinks {
    id: number | string,
    title: string,
    path: string,
    icon: JSX.Element
}


function MenuItem(props: MenuItemProps) {
    return (
        <>
            <small className="text-sm text-gray-800 my-3">
                {props.title}
            </small>
            <div className="flex flex-col text-lg px-3 space-y-3">
                {
                    props.links.map(link => (
                        <NavLink to={link.path} key={link.id} className="flex items-center text-xl">
                            {link.icon}
                            <span className="ml-4">{link.title}</span>
                        </NavLink>
                    ))
                }
            </div>
        </>
    );
}

export default MenuItem;