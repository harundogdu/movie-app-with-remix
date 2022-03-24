import React from "react";
import { Carousel } from "react-responsive-carousel";
import { IMoviesProps } from "~/types/movies";
import MainTitle from "./mainTitle";

interface IMovieDetailsImagesProps {
  BASE_BACKDROP_PATH: string;
  BASE_POSTER_PATH: string;
  movie: IMoviesProps;
}

export default function MovieDetailsImages({
  BASE_BACKDROP_PATH,
  BASE_POSTER_PATH,
  movie,
}: IMovieDetailsImagesProps) {
  return (
    <div>
      <MainTitle title={"Some pictures from the movie"} />
      <Carousel>
        <div className="h-96">
          <img
            src={`${BASE_BACKDROP_PATH}${movie.backdrop_path}`}
            alt={movie.title}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="h-96">
          <img
            src={`${BASE_POSTER_PATH}${movie.poster_path}`}
            alt={movie.title}
            className="h-full w-full object-contain"
          />
        </div>
        {movie.belongs_to_collection ? (
          <div className="h-96">
            <img
              src={`${BASE_BACKDROP_PATH}${movie.belongs_to_collection.backdrop_path}`}
              alt={movie.title}
              className="h-full w-full object-contain"
            />
          </div>
        ) : (
          <></>
        )}
        {movie.belongs_to_collection ? (
          <div className="h-96">
            <img
              src={`${BASE_POSTER_PATH}${movie.belongs_to_collection.poster_path}`}
              alt={movie.title}
              className="h-full w-full object-contain"
            />
          </div>
        ) : (
          <></>
        )}
      </Carousel>
    </div>
  );
}
