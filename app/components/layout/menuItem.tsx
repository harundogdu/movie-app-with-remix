import { NavLink } from "remix";

interface MenuItemProps {
  links: MenuItemLinks[];
  title: string;
}

interface MenuItemLinks {
  id: number | string;
  title: string;
  path: string;
  icon: JSX.Element;
}

function MenuItem(props: MenuItemProps) {
  return (
    <>
      <small className="text-sm dark:text-light my-3">{props.title}</small>
      <div className="flex flex-col text-lg px-2 space-y-1">
        {props.links.map((link, index) => (
          <NavLink
            to={link.path}
            key={`${(index + 1) * Math.random() * 1000000} `} 
            className={({ isActive }) =>
              isActive
                ? "flex items-center w-full px-3 py-2  hover:bg-brand hover:text-white dark:hover:bg-red-600 dark:hover:text-white bg-brand text-white dark:bg-red-600 rounded-md"
                : "flex items-center w-full px-3 py-2  hover:bg-brand hover:text-white dark:hover:bg-red-600 dark:hover:text-white rounded-md"
            }

          >
            {link.icon}
            <span className="ml-4">{link.title}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default MenuItem;
