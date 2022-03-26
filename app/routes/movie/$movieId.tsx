import React from "react";
import {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from "remix";
import invariant from "tiny-invariant";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "react-modal";
import {
  getMovie,
  getMovieVideos,
  getSimilarMovies,
} from "~/services/apiService";
import { customModalStyles } from "~/helpers/utils";
import { Result } from "~/types/videos";
import { MovieDetailHeader, MovieDetailsImages, MoviesDetailModal, SimilarMovies } from "~/components";

export const meta: MetaFunction = ({ data }) => {
  const movie = data.movie;
  invariant(movie, "movie is required");
  return {
    title: `${movie.title}`,
    description: `${movie.overview}`,
  };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.movieId, "params.movieId is required");
  const movie = await getMovie(params.movieId);

  if (!movie) {
    throw new Error("Movie not found");
  }

  const videos = await getMovieVideos(params.movieId);
  const similarMovies = await getSimilarMovies(params.movieId);

  return {
    movie,
    videos,
    similarMovies,
  };
};

export default function MovieDetail() {
  Modal.setAppElement("body");

  const { movie, videos, similarMovies } = useLoaderData();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const currentVideo = videos.results.find(
    (video: Result) =>
      video.name.includes("Official Trailer") || video.name.includes("Trailer")
  );

  return (
    <div className="w-full sm:px-4 sm:space-y-4 h-full overflow-x-hidden">
      {/* Details */}
      <MovieDetailHeader
        movie={movie}
        setModalIsOpen={setModalIsOpen}
      />
      {/* Images */}
      <MovieDetailsImages
        movie={movie}
      />
      {/* Modal */}
      <MoviesDetailModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        customStyles={customModalStyles}
        currentVideo={currentVideo}
      />
      {/* Similar Movies */}
      <SimilarMovies similarMovies={similarMovies} />
    </div>
  );
}