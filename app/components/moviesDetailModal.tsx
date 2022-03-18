import Modal from "react-modal";
import YouTube from "react-youtube";
import React from "react";

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
            <div className="h-[100%]">
                <YouTube
                    videoId={currentVideo.key}
                    opts={{playerVars: {autoplay: 0}}}
                    className="w-full !min-h-[10rem] m-auto"
                />
            </div>
        </Modal>
    );
}

