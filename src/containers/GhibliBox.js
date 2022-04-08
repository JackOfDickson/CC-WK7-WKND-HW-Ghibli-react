import react, {useState, useEffect} from "react"
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


    return (
        <div>
            <h1>Ghibli Film</h1>
            <FilmList films={films}/>
            <FilmDetailBox />

        </div>
    )
}

export default GhibliBox