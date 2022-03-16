import { IMoviesProps } from "~/types/movies";

function MoviesCard({ movie }: { movie: IMoviesProps }) {
  const BASE_IMAGE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  return (
    <div className="text-center">
      <h1 className="font-bold">{movie.title}</h1>
      <div>
        <img src={`${BASE_IMAGE_URL}/${movie.poster_path}`} alt={movie.title} />
      </div>
    </div>
  );
}

export default MoviesCard;
