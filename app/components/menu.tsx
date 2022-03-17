import React from 'react';
import {AiOutlineStar, AiOutlineStock} from "react-icons/ai";
import {BiMovie} from "react-icons/bi";
import MenuItem from "~/components/menuItem";

function Menu() {
    const activeLinks = [
        {
            id: 1,
            title: "Popular",
            path: "/popular",
            icon: <BiMovie/>
        },
        {
            id: 2,
            title: "Top Rated",
            path: "/top-rated",
            icon: <AiOutlineStar/>
        },
        {
            id: 3,
            title: "Upcoming",
            path: "/upcoming",
            icon: <AiOutlineStock/>
        }
    ]
    const genreLinks = [
        {
            id: 28,
            title: "Action",
            path: "/genre/28",
            icon: <AiOutlineStar/>
        },
        {
            id: 12,
            title: "Adventure",
            path: "/genre/12",
            icon: <AiOutlineStock/>
        },
        {
            id: 16,
            title: "Animation",
            path: "/genre/16",
            icon: <AiOutlineStock/>
        },
        {
            id: 35,
            title: "Comedy",
            path: "/genre/35",
            icon: <AiOutlineStock/>
        },
        {
            id: 80,
            title: "Crime",
            path: "/genre/80",
            icon: <AiOutlineStock/>
        },
        {
            id: 99,
            title: "Documentary",
            path: "/genre/99",
            icon: <AiOutlineStock/>
        },
        {
            id: 18,
            title: "Drama",
            path: "/genre/18",
            icon: <AiOutlineStock/>
        },
        {
            id: 10751,
            title: "Family",
            path: "/genre/10751",
            icon: <AiOutlineStock/>
        },
        {
            id: 14,
            title: "Fantasy",
            path: "/genre/14",
            icon: <AiOutlineStock/>
        },
        {
            id: 36,
            title: "History",
            path: "/genre/36",
            icon: <AiOutlineStock/>
        },
        {
            id: 27,
            title: "Horror",
            path: "/genre/27",
            icon: <AiOutlineStock/>
        },
        {
            id: 10402,
            title: "Music",
            path: "/genre/10402",
            icon: <AiOutlineStock/>
        },
        {
            id: 9648,
            title: "Mystery",
            path: "/genre/9648",
            icon: <AiOutlineStock/>
        },
        {
            id: 10749,
            title: "Romance",
            path: "/genre/10749",
            icon: <AiOutlineStock/>
        },
        {
            id: 878,
            title: "Science Fiction",
            path: "/genre/878",
            icon: <AiOutlineStock/>
        },
        {
            id: 10770,
            title: "TV Movie",
            path: "/genre/10770",
            icon: <AiOutlineStock/>
        },
        {
            id: 53,
            title: "Thriller",
            path: "/genre/53",
            icon: <AiOutlineStock/>
        },
        {
            id: 10752,
            title: "War",
            path: "/genre/10752",
            icon: <AiOutlineStock/>
        },
        {
            id: 37,
            title: "Western",
            path: "/genre/37",
            icon: <AiOutlineStock/>
        }
    ]
    return (
        <div>
            <div className="flex flex-col">
                <MenuItem links={activeLinks} title="Categories"/>
                <MenuItem links={genreLinks} title="Genres"/>
            </div>
        </div>
    );
}

export default Menu;