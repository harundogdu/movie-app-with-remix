import {NavLink} from "remix";
import {IMoviesProps} from "~/types/movies";
import {AiFillStar,AiOutlineStar} from "react-icons/ai";

function MoviesCard({movie}: { movie: IMoviesProps }) {
    const BASE_IMAGE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

    const calculateStars = (star: number) => {
        const stars = [];
        for (let i = 0; i <= star / 2; i++) {
            stars.push(<AiFillStar key={i}/>);
        }
        for (let i = 0; i < 4 - star / 2; i++) {
            stars.push(<AiOutlineStar key={i}/>);
        }
        return stars;
    }

    return (
        <NavLink
            to={`/movies/${movie.id}`}
            className="text-center m-2 rounded-lg cursor-pointer group hover:scale-105 transition-transform duration-300"
        >
            <div className="relative">
                <img
                    src={`${BASE_IMAGE_URL}/${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg"
                />
                <h1 className="group-hover:flex font-bold text-sm absolute bottom-0 left-0 h-10 w-full bg-black bg-opacity-40 text-white hidden justify-center items-center px-4 py-5 rounded-t transition-transform duration-300">
                    {movie.title}
                </h1>
            </div>
            <div className="flex items-center justify-center text-brandYellow mt-4 mb-2">
                {calculateStars(movie.vote_average)}
            </div>
        </NavLink>
    );
}

export default MoviesCard;
