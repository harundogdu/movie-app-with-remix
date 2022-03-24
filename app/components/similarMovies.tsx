import { IMoviesProps } from "~/types/movies";
import MainTitle from "./mainTitle";
import MoviesCard from "./moviesCard";

interface ISimilarMoviesProps {
  similarMovies: IMoviesProps[];
}

function SimilarMovies({ similarMovies }: ISimilarMoviesProps) {
  return (
    <div>
      <MainTitle title="Similar Movies" />
      <div className="grid grid-cols-7 w-full px-6">
        {similarMovies.map((movie, index) => {
          return <MoviesCard movie={movie} key={`${movie.id}_${index}`} />;
        })}
      </div>
    </div>
  );
}

export default SimilarMovies;
