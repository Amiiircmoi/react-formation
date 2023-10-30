import { useState } from "react"

const SearchMovie = () => {
    const [title, setTitle] = useState(<h1>Recherche...</h1>)
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch();
        setTitle(<h1>Recherche : {search}</h1>)
        alert('Recherche lancée pour ' + search);
    };

    const handleInputChange = (textInput) => {
        setSearch(textInput);
        console.log(textInput);
    };

    return (
        <>
            {title}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Recherche..."
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <button type="submit">Rechercher</button>
            </form>
        </>
    )
}

export default SearchMovie;