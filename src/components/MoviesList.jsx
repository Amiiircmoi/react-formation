const MoviesList = ({ movies }) => {
    console.log(movies);
    return (
        <div>
            <h2 className="special-title">My list</h2>
            <ul>
                {movies.map((movie, index) => {
                    console.log(movie);
                    return (
                        <li key={index}>
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                            <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt={movie.title} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MoviesList