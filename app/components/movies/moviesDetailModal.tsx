import Modal from "react-modal";
import YouTube from "react-youtube";

interface IMoviesDetailModalProps {
    modalIsOpen: boolean;
    setModalIsOpen: (isOpen: boolean) => void;
    customStyles: any;
    currentVideo: {
        key: string;
    };
}

export default function MoviesDetailModal({
    modalIsOpen,
    setModalIsOpen,
    currentVideo,
    customStyles
}: IMoviesDetailModalProps) {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles}
        >
            <div id="youtube" className="h-full">
                <YouTube
                    videoId={currentVideo.key}
                    opts={{ playerVars: { autoplay: 0 } }}
                    className="w-full !h-full m-auto"
                />
            </div>
        </Modal>
    );
}

