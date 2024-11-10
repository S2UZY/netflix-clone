import { motion } from "framer-motion";
import { styled } from "styled-components";

export const GalleryWrapper = styled.div`
  padding: 20px;
  margin: 0 auto;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`;

export const MovieCard = styled(motion.div)<{ bgPhoto: string }>`
  height: 300px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  &:hover {
    h4 {
      opacity: 1;
    }
  }
`;

export const MovieInfo = styled(motion.div)`
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 16px;
    color: white;
  }
`;
