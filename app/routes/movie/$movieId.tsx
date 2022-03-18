import {json, LinksFunction, LoaderFunction, useLoaderData} from "remix";
import invariant from "tiny-invariant";
import {getMovie} from "~/services/apiService";
import {IMoviesProps} from "~/types/movies";
import {HiExternalLink} from "react-icons/hi";
import MovieDetailItem from "~/components/MovieDetailItem";
import MovieDetailButtons from "~/components/MovieDetailButtons";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';


export const links: LinksFunction = () => {
    return [{rel: "stylesheet", href: styles}];
};
export const loader: LoaderFunction = async ({params}) => {
    invariant(params.movieId, "params.movieId is required");
    return json(await getMovie(params.movieId));
};

export default function MovieDetail() {
    const movie = useLoaderData<IMoviesProps>();
    const BASE_BACKDROP_PATH = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";
    const BASE_POSTER_PATH = "https://www.themoviedb.org/t/p/w220_and_h330_face";

    const parseYear = (date: string) => {
        return date.split("-")[0];
    };

    return (
        <div className="w-full px-4 space-y-4">

            <div className="relative bg-gradient-to-b from-detailPrimary to-detailSecondary rounded-lg ">
                <div
                    className="absolute inset-0 opacity-10 w-full h-full rounded-lg"
                    style={{
                        background: `url(${BASE_BACKDROP_PATH}${movie.backdrop_path}) no-repeat center center`,
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                    }}
                />

                <div
                    className="z-10 relative w-full text-white py-12 px-6 rounded-lg flex justify-evenly items-center space-x-4">
                    <div className="flex-shrink-0 min-w-[20rem]">
                        <img
                            src={`${BASE_POSTER_PATH}${movie.poster_path}`}
                            alt={movie.title}
                            className="rounded-lg w-96 h-96 object-contain"
                        />
                    </div>
                    <div className="flex flex-col px-4 space-y-4">
                        <h1 className="text-xl">{movie.title} - ({parseYear(movie.release_date)})
                            <span className="text-gray-200 mx-1">{movie.adult ? "- +18" : ""}</span>
                            <span className="text-gray-200 mx-1">{movie.status}</span>
                        </h1>

                        <MovieDetailItem title={"Overview"} text={movie.overview}/>

                        <MovieDetailItem title={"Genres"} array={movie.genres}/>
                        <MovieDetailItem title={"Production Countries"} array={movie.production_countries}/>
                        <MovieDetailItem title={"Production Companies"} array={movie.production_companies}/>
                        <MovieDetailItem title={"Spoken Languages"} array={movie.spoken_languages}/>

                        <div className="flex space-x-4">
                            <MovieDetailItem title={"Release Date"} text={movie.release_date}/>
                            <MovieDetailItem title={"Budget"} text={movie.budget}/>
                            <MovieDetailItem title={"Revenue"} text={movie.revenue}/>
                            <MovieDetailItem title={"Runtime"} text={`${movie.runtime} minutes`}/>
                        </div>

                        <div>
                            <span className="text-sm">
                                <span className="text-gray-600">
                                    <HiExternalLink className="inline-block mr-1"/>
                                    <a href={movie.homepage} rel="noreferrer" target="_blank">Load More..</a>
                                </span>
                            </span>
                        </div>

                        <div className="flex justify-end space-x-2">
                            <MovieDetailButtons
                                title="View on TMDB"
                                path={`https://www.themoviedb.org/movie/${movie.id}`}
                            />
                            <MovieDetailButtons
                                title="View on IMDB"
                                path={`https://www.imdb.com/title/${movie.imdb_id}`}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <h4 className="text-2xl text-white">
                Some pictures from the movie
            </h4>
            <Carousel>
                <div className="h-96">
                    <img src={`${BASE_BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title}
                         className="h-full w-full object-contain"/>
                </div>
                <div className="h-96">
                    <img src={`${BASE_POSTER_PATH}${movie.poster_path}`} alt={movie.title}
                         className="h-full w-full object-contain"/>
                </div>
                {movie.belongs_to_collection ?
                    <div className="h-96">
                        <img src={`${BASE_BACKDROP_PATH}${movie.belongs_to_collection.backdrop_path}`} alt={movie.title}
                             className="h-full w-full object-contain"/>
                    </div>
                    :
                    <></>
                }
                {movie.belongs_to_collection ?
                    <div className="h-96">
                        <img src={`${BASE_POSTER_PATH}${movie.belongs_to_collection.poster_path}`} alt={movie.title}
                             className="h-full w-full object-contain"/>
                    </div>
                    :
                    <></>
                }
            </Carousel>

        </div>
    );
}