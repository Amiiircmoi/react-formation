const MoviesList = ({ movies }) => {
    console.log(movies);
    return (
        <div>
            <h2 className="special-title">My list</h2>
            <ul>
                {movies.map((movie, index) => {
                    return <li key={index}>{movie}</li>
                })}
            </ul>
        </div>
    )
}

export default MoviesList