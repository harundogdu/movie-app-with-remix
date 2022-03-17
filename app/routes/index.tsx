import {json, LoaderFunction, useLoaderData} from "remix";
import MoviesCard from "~/components/moviesCard";
import {getPopularMovies} from "~/services/apiService";
import {IMoviesProps} from "~/types/movies";
import HeroSection from "~/components/heroSection";

export const loader: LoaderFunction = async () => {
    const {results} = await getPopularMovies();
    return json(results);
};

export default function Index() {
    const movies = useLoaderData<IMoviesProps[]>();

    return (
        <div className="flex flex-col justify-center items-center">
            <HeroSection img="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg"
                         title="Avengers: Sonsuzluk Savaşı"/>

            <div className="grid grid-cols-5 mt-6">
                {movies.map((movie) => (
                    <MoviesCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    );
}
