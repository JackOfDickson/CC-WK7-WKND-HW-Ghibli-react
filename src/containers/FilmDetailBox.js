import React, {useState, useEffect} from "react";
import FilmDetail from "../components/FilmDetail";

const FilmDetailBox = ({selectedFilm, setSelectedFilm}) => {

    // const fetchPeople


    return (
            <FilmDetail selectedFilm={selectedFilm} setSelectedFilm={setSelectedFilm}/>
    )
}

export default FilmDetailBox