import { useEffect, useState } from 'react';
import MoviesList from '../components/MoviesList'
import { getTrends } from '../services/tmdb';

const Trending = () => {
    const [moviesArray, setMoviesArray] = useState([]);

    useEffect(() => {
        getTrends().then((data) => {
            setMoviesArray(data);
        }
        );
    }, []);

    return <MoviesList movies={moviesArray} />;
}

export default Trending;