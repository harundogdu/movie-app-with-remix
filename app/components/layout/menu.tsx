import { AiOutlineStar, AiOutlineStock } from "react-icons/ai";
import { BiMovie } from "react-icons/bi";
import { CgRowLast } from "react-icons/cg";
import { MenuItem } from "~/components";

function Menu() {
  const activeLinks = [
    {
      id: 1,
      title: "Now Playing",
      path: "/",
      icon: <CgRowLast />,
    },
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
    <div className="my-4">
      <div className="flex flex-col">
        <MenuItem links={activeLinks} title="Categories" />
      </div>
    </div>
  );
}

export default Menu;
