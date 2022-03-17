import { json, Link, LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getMovie } from "~/services/apiService";
import { IMoviesProps } from "~/types/movies";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.movieId, "params.movieId is required");
  return json(await getMovie(params.movieId));
};

export default function MovieDetail() {
  const movie = useLoaderData<IMoviesProps>();
  const BASE_IMAGE_URL = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";
  return (
    <div className="flex flex-col w-full min-h-full">
      <h1>{movie.title}</h1>
      <div>
        <img src={`${BASE_IMAGE_URL}/${movie.backdrop_path}`} alt={movie.title} />
      </div>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
