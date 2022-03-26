import { IMoviesProps } from "~/types/movies";
import { MainTitle, MoviesCard } from "~/components";

interface ISimilarMoviesProps {
  similarMovies: IMoviesProps[];
}

function SimilarMovies({ similarMovies }: ISimilarMoviesProps) {
  return (
    <div>
      <MainTitle title="Similar Movies" />
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-10 w-full px-6" >
        {similarMovies.map((movie, index) => {
          return (
            <MoviesCard movie={movie} key={`${(index + 1) * Math.random() * 10000} `} />
          )
        })}
      </div>
    </div>
  );
}

export default SimilarMovies;
