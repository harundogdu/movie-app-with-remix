import axios from "axios";

const API_KEY = process.env.API_KEY;

export const apiService = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

export const getMovie = async (movieId: string) => {
    const response = await apiService.get(`/movie/${movieId}?api_key=${API_KEY}`)
    return response.data;
}

export const getMovieVideos = async (movieId: string) => {
    const response = await apiService.get(`/movie/${movieId}/videos?api_key=${API_KEY}`);
    return response.data;
}
/* category fetching */

export const getMoviesByCategory = async (category: string) => {
    const response = await apiService.get(`/movie/${category}?api_key=${API_KEY}`);
    return response.data;
}

export const getNowPlayingMovies = async () => {
    const response = await apiService.get(`/movie/now_playing?api_key=${API_KEY}`);
    return response.data;
}

export const getSimilarMovies = async (movieId: string) => {
    const response = await apiService.get(`/movie/${movieId}/similar?api_key=${API_KEY}`);
    const { results } = response.data;
    return results;
}

/* Search Movie */
export const getSearchMovieDetails = async (query: string) => {
    const response = await apiService.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
    const { results } = response.data;
    return results;
}

