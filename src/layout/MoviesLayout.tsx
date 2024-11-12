import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { IGetMoviesResult } from "../api";
import { Banner, MovieDetailCard, MoviesGallery } from "../components";

export interface MoviesLayoutProps {
  data: IGetMoviesResult;
  returnPath: string;
}
export function MoviesLayout({ data, returnPath }: MoviesLayoutProps) {
  return (
    <Wrapper>
      <>
        <Banner
          bgPhoto={data.results[0].backdrop_path}
          title={data.results[0].title}
          overview={data.results[0].overview}
        />
        {data && <MoviesGallery data={data} />}
        {data && <MovieDetailCard data={data} returnPath={returnPath} />}
      </>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: black;
  padding-bottom: 20px;
`;
