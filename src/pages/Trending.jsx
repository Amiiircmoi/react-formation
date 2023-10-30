import { useEffect, useState } from 'react';
import MoviesList from '../components/MoviesList'

const Trending = () => {
    const [click, setClick] = useState(0);
    const moviesArray = ['Fast and Furious', 'Harry Potter', 'Lord of the Rings'];

    useEffect(() => {
        console.log("Trending");
    }, [click]);

    const handleClick = () => {
        console.log('clicked');
        setClick(click + 1);
    }

    return (
        <>
            <p>Likes : {click}</p>
            <button
                onClick={() => {
                    handleClick();
                }}
            >Like</button>
            <MoviesList movies={moviesArray} />
        </>
    );
}

export default Trending;