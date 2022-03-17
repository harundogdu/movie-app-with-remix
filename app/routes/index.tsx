import { json, LoaderFunction, useLoaderData } from "remix";
import MoviesCard from "~/components/moviesCard";
import { getPopularMovies } from "~/services/apiService";
import { IMoviesProps } from "~/types/movies";

export const loader: LoaderFunction = async () => {
  const { results } = await getPopularMovies();
  return json(results);
};

export default function Index() {
  const movies = useLoaderData<IMoviesProps[]>();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Popular Movies</h1>
      <div className="grid grid-cols-5 mt-6">
        {movies.map((movie) => (
          <MoviesCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
