import axios from "axios";

const movieBaseUrl='https://api.themoviedb.org/3';
const api_key=import.meta.env.VITE_TMDB_API_KEY
const getTrendingMovies=()=>axios.get(movieBaseUrl+'/trending/all/day?api_key='+api_key);
const imageBaseUrl='https://image.tmdb.org/t/p/original';

const movieByGenreBaseURL=movieBaseUrl+'/discover/movie?api_key='+api_key
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTrendingMovies,
    imageBaseUrl,
    getTrendingVideos,
    getMovieByGenreId
}
