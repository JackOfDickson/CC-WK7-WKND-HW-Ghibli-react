import React, {useState, useEffect} from "react";
import FilmDetail from "../components/FilmDetail";

const FilmDetailBox = ({selectedFilm, setSelectedFilm}) => {

    // const [people, setPeople] = useState([])

    // useEffect(() => {
    //     getPeople();
    // }, [setSelectedFilm])

    // const getPeople = function(selectedFilm) {
    //     fetch(selectedFilm.people)
    //     .then(response => response.json)
    //     .then(data => setPeople(data))
    // }


    return (
            <FilmDetail 
            selectedFilm={selectedFilm}
            setSelectedFilm={setSelectedFilm}
            />
    )
}

export default FilmDetailBox