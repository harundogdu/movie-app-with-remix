import React from 'react';
import MovieDetailItem from "~/components/MovieDetailItem";
import {HiExternalLink} from "react-icons/hi";
import MovieDetailButtons from "~/components/MovieDetailButtons";
import {IMoviesProps} from "~/types/movies";

interface MovieDetailHeaderProps {
    BASE_BACKDROP_PATH: string;
    BASE_POSTER_PATH: string;
    movie: IMoviesProps;
    setModalIsOpen: (isOpen: boolean) => void;
}

export default function MovieDetailHeader({
                                              BASE_BACKDROP_PATH,
                                              BASE_POSTER_PATH,
                                              movie,
                                              setModalIsOpen
                                          }: MovieDetailHeaderProps) {
    const parseYear = (date: string) => {
        return date.split("-")[0];
    };
    return (
        <div className="relative bg-gradient-to-b from-detailPrimary to-detailSecondary rounded-lg ">
            <div
                className="absolute inset-0 opacity-10 w-full h-full rounded-lg"
                style={{
                    background: `url(${BASE_BACKDROP_PATH}/${movie.backdrop_path}) no-repeat center center`,
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                }}
            />

            <div
                className="z-1 relative w-full text-white py-12 px-6 rounded-lg flex justify-evenly items-center space-x-4">
                <div className="flex-shrink-0 min-w-[20rem] flex flex-col items-center space-y-4">
                    <img
                        src={`${BASE_POSTER_PATH}/${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded-lg w-96 h-96 object-contain"
                    />
                    <button
                        onClick={() => setModalIsOpen(true)}
                        className="bg-brandYellow px-8 py-2 text-primary w-fit text-lg rounded hover:bg-primary hover:text-brandYellow transition-colors duration-300">
                        Watch Trailer
                    </button>
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

    );
}

