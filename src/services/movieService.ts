import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesHttpResponse {
  results: Movie[];
}

export const fetchMovies = async (
  query: string,
  page: number
): Promise<Movie[]> => {
  const myKey = import.meta.env.VITE_TMDB_TOKEN;

  const options = {
    method: "GET",
    URL: `https://api.themoviedb.org/3/search/movie`,
    params: {
      query,
      page,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${myKey}`,
    },
  };

  const response = await axios.get<MoviesHttpResponse>(options.URL, options);

  return response.data.results;
};
