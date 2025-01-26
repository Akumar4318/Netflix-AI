import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import useMovieTrailer from "../Hooks/UseMovieTrailer";

const VideoBackground = ({ MovieId }) => {
  // Fetch trailer video and update the store with video data
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  const iframeRef = useRef(null);

  useMovieTrailer(MovieId);

  useEffect(() => {
    let intervalId;

    const restartVideo = () => {
      if (iframeRef.current && trailerVideo?.key) {
        const iframe = iframeRef.current;
        const src = `https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&muted=0`;
        iframe.src = src; // Reset the video source to restart playback
      }
    };

    if (trailerVideo?.key) {
      restartVideo(); // Start the video initially
      intervalId = setInterval(restartVideo, 120000); // Restart every 10 seconds
    }

    return () => {
      clearInterval(intervalId); // Cleanup on unmount
    };
  }, [trailerVideo]);

  return (
    <div>
      <div className="w-[42rem] md:w-screen scale-150 ml-20 -z-30 overflow-hidden">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&muted=0`}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          ref={iframeRef}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
