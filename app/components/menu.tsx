import { AiOutlineStar, AiOutlineStock } from "react-icons/ai";
import { BiMovie } from "react-icons/bi";
import MenuItem from "~/components/menuItem";

function Menu() {
  const activeLinks = [
    {
      id: 2,
      title: "Popular",
      path: "/categories/popular",
      icon: <BiMovie />,
    },
    {
      id: 3,
      title: "Top Rated",
      path: "/categories/top-rated",
      icon: <AiOutlineStar />,
    },
    {
      id: 4,
      title: "Upcoming",
      path: "/categories/upcoming",
      icon: <AiOutlineStock />,
    },
  ];

  return (
    <div>
      <div className="flex flex-col">
        <MenuItem links={activeLinks} title="Categories" />
      </div>
    </div>
  );
}

export default Menu;
