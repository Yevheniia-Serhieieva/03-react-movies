import axios from "axios";
import type { Movie } from "../types/movies";

interface MoviesHttpResponce {
  results: Movie[];
}

export const fetchMovies = async (
  query: string,
  page: number
): Promise<Movie[]> => {
  const myKey = import.meta.env.VITE_TMDB_TOKEN;

  const options = {
    method: "GET",
    baseURL: `https://api.themoviedb.org/3/search/movie`,
    params: {
      query,
      page,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${myKey}`,
    },
  };

  const response = await axios.get<MoviesHttpResponce>(
    options.baseURL,
    options
  );

  return response.data.results;
};
