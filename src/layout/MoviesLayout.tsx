import { styled } from "styled-components";
import { IGetMoviesResult } from "../api";
import { Banner, MovieDetailCard, MoviesGallery } from "../components";

export interface MoviesLayoutProps {
  data: IGetMoviesResult;
}
export function MoviesLayout({ data }: MoviesLayoutProps) {
  return (
    <Wrapper>
      <>
        <Banner
          bgPhoto={data?.results[0].backdrop_path || ""}
          title={data?.results[0].title || ""}
          overview={data?.results[0].overview || ""}
        />
        {data && <MoviesGallery data={data} />}
        {data && <MovieDetailCard data={data} />}
      </>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: black;
  padding-bottom: 20px;
`;
