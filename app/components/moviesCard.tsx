import { NavLink } from "remix";
import { IMoviesProps } from "~/types/movies";

function MoviesCard({ movie }: { movie: IMoviesProps }) {
  const BASE_IMAGE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
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
    </NavLink>
  );
}

export default MoviesCard;
