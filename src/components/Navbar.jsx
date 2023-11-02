import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Trending</Link>{" / "}
            <Link to="/search">Search</Link>{" / "}
            <Link to="/movie_editor">Movies editor</Link>
        </nav>
    )
}

export default Navbar