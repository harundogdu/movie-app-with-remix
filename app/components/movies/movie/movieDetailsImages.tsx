import { Carousel } from "react-responsive-carousel";
import { IMoviesProps } from "~/types/movies";
import { MainTitle } from "~/components";

interface IMovieDetailsImagesProps {
  movie: IMoviesProps;
}

export default function MovieDetailsImages({
  movie,
}: IMovieDetailsImagesProps) {
  const BASE_BACKDROP_PATH = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces"
  const BASE_POSTER_PATH = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  return (
    <div className="px-4">
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
