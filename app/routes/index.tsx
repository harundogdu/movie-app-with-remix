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
    const heroSectionMovie = movies.find(movie => movie.vote_average > 8) || movies[0];
    const BASE_BACKDROP_PATH = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";
    return (
        <div className="flex flex-col justify-center items-center">
            <HeroSection
                img={`${BASE_BACKDROP_PATH}/${heroSectionMovie.backdrop_path}`}
                title={heroSectionMovie.title}
                overview={heroSectionMovie.overview}
                id={heroSectionMovie.id}
            />

            <div className="grid grid-cols-5 mt-6">
                {movies.map((movie,index) => (
                    <MoviesCard movie={movie} key={index}/>
                ))}
            </div>
        </div>
    );
}
