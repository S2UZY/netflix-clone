import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, useScroll } from "framer-motion";
import { getDetailMovie, IGetMoviesResult } from "../../api";
import { makeImagePath } from "../../utils";
import {
  BigCover,
  BigMovie,
  BigOverview,
  BigTitle,
  Overlay,
} from "./MovieDetailCard.style";

export interface MovieDetailCardProps {
  data: IGetMoviesResult;
}

export function MovieDetailCard({ data }: MovieDetailCardProps) {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const { movieId } = useParams();

  const onOverlayClick = () => navigate("/");
  const clickedMovie =
    movieId && data?.results.find((movie) => movie.id === +movieId);

  return (
    <AnimatePresence>
      {movieId ? (
        <>
          <Overlay
            onClick={onOverlayClick}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <BigMovie style={{ top: scrollY.get() + 100 }} layoutId={movieId}>
            {clickedMovie && (
              <>
                <BigCover
                  style={{
                    backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                      clickedMovie.backdrop_path,
                      "w500"
                    )})`,
                  }}
                />
                <BigTitle>{clickedMovie.title}</BigTitle>
                <BigOverview>{clickedMovie.overview}</BigOverview>
              </>
            )}
          </BigMovie>
        </>
      ) : null}
    </AnimatePresence>
  );
}