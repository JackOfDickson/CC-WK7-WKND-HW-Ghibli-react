import react, {useState, useEffect} from "react"
import classNames from "classnames"
import FilmList from "../components/FilmList"
import FilmDetailBox from "./FilmDetailBox"



const GhibliBox = () => {

    const [films, setFilms] = useState([]);
    const [selectedFilm , setSelectedFilm]  = useState(null)

    useEffect(() => {
        getGhibliFilms();
    }, [])

    const getGhibliFilms = function() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(respone => respone.json())
        .then(films => setFilms(films))
    }

    const onFilmSelect = function(film){
        setSelectedFilm(film)
    }

    const contentClass = classNames({
        "content": selectedFilm
    })


    return (
        <>
            <header>
                <h1>Ghibli Gallery</h1>
            </header>
            <div id={contentClass}>
                <FilmList films={films} onFilmSelect={onFilmSelect} selectedFilm={selectedFilm}/>
                {selectedFilm ? 
                <FilmDetailBox selectedFilm={selectedFilm} setSelectedFilm={setSelectedFilm}/> 
                : null}
            </div>
        </>
    )
}

export default GhibliBox