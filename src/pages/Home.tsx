import { useQuery } from "@tanstack/react-query";
import { getPopularMovies, IGetMoviesResult } from "../api";
import { Loader } from "../components";
import { MoviesLayout } from "../layout";

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>({
    queryKey: ["movies", "popular"],
    queryFn: getPopularMovies,
  });

  if (isLoading || !data) return <Loader />;

  return <MoviesLayout data={data} returnPath="/" />;
}
export default Home;
