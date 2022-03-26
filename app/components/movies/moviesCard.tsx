import { useEffect, useRef } from "react";
import { NavLink } from "remix";
import VanillaTilt from 'vanilla-tilt';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IMoviesProps } from "~/types/movies";

function MoviesCard({ movie }: { movie: IMoviesProps }) {
    console.log('re_render');

    const BASE_POSTER_PATH = "https://www.themoviedb.org/t/p/w220_and_h330_face";

    const calculateStars = (star: number) => {
        const stars = [];
        for (let i = 0; i <= star / 2; i++) {
            stars.push(<AiFillStar key={i} />);
        }
        for (let i = 0; i < 4 - star / 2; i++) {
            stars.push(<AiOutlineStar key={i} />);
        }
        return stars;
    }

    const tilt = useRef(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const options = {
        speed: 300,
        max: 10,
        perspective: 1000,
        transition: true,
        easing: "cubic-bezier(.03,.98,.52,.99)"
    }

    useEffect(() => {
        // @ts-ignore
        return VanillaTilt.init(tilt.current, options);
    }, [options]);


    return (
        <NavLink
            to={`/movie/${movie.id}`}
            className="text-center m-2 rounded-lg cursor-pointer group"
        >
            <div ref={tilt} className="rounded-lg">
                <div className="relative">
                    <img
                        src={`${BASE_POSTER_PATH}/${movie.poster_path || BASE_POSTER_PATH + "/" + movie.backdrop_path || BASE_POSTER_PATH + "/" + movie.belongs_to_collection.poster_path}`}
                        alt={movie.title}
                        className="rounded-lg w-full h-full"
                    />
                    <h1 className="group-hover:flex font-bold text-sm absolute bottom-0 left-0 h-10 w-full bg-black bg-opacity-40 text-white hidden justify-center items-center px-4 py-5 rounded-t transition-transform duration-300 rounded-bl rounded-br">
                        {movie.title}
                    </h1>
                </div>
                <div className="flex items-center justify-center text-brandYellow mt-4 mb-2">
                    {calculateStars(movie.vote_average)}
                </div>

            </div>

        </NavLink>
    );
}

export default MoviesCard;
