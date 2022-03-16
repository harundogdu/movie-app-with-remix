import axios from "axios";

export const apiService = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

export const getPopularMovies = async () => {
    const API_KEY = process.env.API_KEY;
    const response = await apiService.get(`/movie/popular?api_key=${API_KEY}`);
    return response.data;
}