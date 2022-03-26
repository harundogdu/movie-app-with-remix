import { HiExternalLink } from "react-icons/hi";

interface IMovieDetailButtonsProps {
    title: string;
    path: string;
}

export default function MovieDetailButtons({ title, path }: IMovieDetailButtonsProps) {
    return (
        <button
            className="bg-white text-primary font-semibold py-2 px-4 rounded-lg hover:bg-brandYellow transition-colors duration-300 flex items-center space-x-2">
            <a href={path}
                target="_blank"
                rel="noopener noreferrer">
                {title}
            </a>
            <HiExternalLink />
        </button>
    );
}
