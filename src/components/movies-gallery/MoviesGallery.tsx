import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IGetMoviesResult } from "../../api";
import { makeImagePath } from "../../utils";
import {
  cardVariants,
  containerVariants,
  infoVariants,
} from "./MoviesGallery.animation";
import {
  GalleryGrid,
  GalleryWrapper,
  MovieCard,
  MovieInfo,
} from "./MoviesGallery.style";

export interface MoviesGalleryProps {
  data: IGetMoviesResult;
}

export function MoviesGallery({ data }: MoviesGalleryProps) {
  const navigate = useNavigate();

  const onMovieClick = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <GalleryWrapper>
      <AnimatePresence>
        <GalleryGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {data.results.map((movie, index) => (
            <MovieCard
              key={movie.id}
              layoutId={movie.id + ""}
              bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onClick={() => onMovieClick(movie.id)}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1,
              }}
            >
              <MovieInfo variants={infoVariants}>
                <h4>{movie.title}</h4>
              </MovieInfo>
            </MovieCard>
          ))}
        </GalleryGrid>
      </AnimatePresence>
    </GalleryWrapper>
  );
}
