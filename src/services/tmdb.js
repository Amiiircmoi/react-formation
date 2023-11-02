import axios from 'axios';

export const getTrends = async () => {
    const request = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    return request.data.results;
}