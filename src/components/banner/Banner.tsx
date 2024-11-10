import { styled } from "styled-components";
import { makeImagePath } from "../../utils";

export interface BannerProps {
  bgPhoto: string;
  title: string;
  overview: string;
}

export function Banner({ bgPhoto, title, overview }: BannerProps) {
  return (
    <Box bgPhoto={makeImagePath(bgPhoto)}>
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
    </Box>
  );
}

const Box = styled.div<{ bgPhoto: string }>`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 60px 60px 0px 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 20px;
  margin-bottom: 50px;
  width: 50%;
`;
