import React from "react";
import {LinksFunction, LoaderFunction, MetaFunction, useLoaderData} from "remix";
import invariant from "tiny-invariant";
import {getMovie, getMovieVideos} from "~/services/apiService";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from 'react-modal';
import {Result} from "~/types/videos";
import MovieDetailHeader from "~/components/movieDetailHeader";
import MovieDetailsImages from "~/components/movieDetailsImages";
import MoviesDetailModal from "~/components/moviesDetailModal";

export const meta: MetaFunction = ({params, data}) => {
    const movie = data.movie;
    invariant(movie, "movie is required");
    return {
        title: `${movie.title}`,
        description: `${movie.overview}`,
    };
};


export const links: LinksFunction = () => {
    return [{rel: "stylesheet", href: styles}];
};

export const loader: LoaderFunction = async ({params}) => {
    invariant(params.movieId, "params.movieId is required");
    const movie = await getMovie(params.movieId);
    const videos = await getMovieVideos(params.movieId);

    return {
        movie,
        videos
    };
};

export default function MovieDetail() {
    const {movie, videos} = useLoaderData();
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const BASE_BACKDROP_PATH = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";
    const BASE_POSTER_PATH = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    Modal.setAppElement('body');


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '4px',
            width: '55%',
            height: '50%',
            padding: '0',
            overflow: 'hidden',
            border: 'none',
            boxShadow: '0 0 20px rgba(0,0,0,0.5)',
            outline: 'none',
            zIndex: '9999',
        },
    };

    const currentVideo = videos.results.find((video: Result) => (
        video.name.includes("Official Trailer") || video.name.includes("Trailer")
    ))

    return (
        <div className="w-full px-4 space-y-4 h-full">
            {/* Details */}
            <MovieDetailHeader
                BASE_BACKDROP_PATH={BASE_BACKDROP_PATH}
                BASE_POSTER_PATH={BASE_POSTER_PATH}
                movie={movie}
                setModalIsOpen={setModalIsOpen}
            />
            {/* Images */}
            <MovieDetailsImages
                BASE_BACKDROP_PATH={BASE_BACKDROP_PATH}
                BASE_POSTER_PATH={BASE_POSTER_PATH}
                movie={movie}
            />
            {/* Modal */}
            <MoviesDetailModal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                customStyles={customStyles}
                currentVideo={currentVideo}
            />
        </div>
    );
}