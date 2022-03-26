import { json, LoaderFunction, useLoaderData } from "remix";
import { getNowPlayingMovies } from "~/services/apiService";
import { IMoviesProps } from "~/types/movies";
import { CategorySection } from "~/components";

export const loader: LoaderFunction = async () => {
  const { results } = await getNowPlayingMovies();
  return json(results);
};

export default function Index() {
  const movies = useLoaderData<IMoviesProps[]>();
  const heroSectionMovie = movies.find((movie) => movie.vote_average > 8) || movies[0];
  return (
    <CategorySection
      title={"Now Playing Movies"}
      movies={movies}
      heroSectionMovie={heroSectionMovie}
    />
  );
}
