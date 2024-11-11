import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMovies, IGetMoviesResult } from "../api";
import { Loader } from "../components";
import { MoviesLayout } from "../layout";

function NowPlaying() {
  const { data, isLoading } = useQuery<IGetMoviesResult>({
    queryKey: ["movies", "now-playing"],
    queryFn: getNowPlayingMovies,
  });

  if (isLoading || !data) return <Loader />;

  return <MoviesLayout data={data} returnPath="now-playing" />;
}
export default NowPlaying;
