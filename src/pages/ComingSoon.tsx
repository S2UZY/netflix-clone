import { useQuery } from "@tanstack/react-query";
import { getComingSoonMovies, IGetMoviesResult } from "../api";
import { Loader } from "../components";
import { MoviesLayout } from "../layout";

function ComingSoon() {
  const { data, isLoading } = useQuery<IGetMoviesResult>({
    queryKey: ["movies", "coming-soon"],
    queryFn: getComingSoonMovies,
  });

  if (isLoading || !data) return <Loader />;

  return <MoviesLayout data={data} returnPath="/coming-soon" />;
}
export default ComingSoon;
