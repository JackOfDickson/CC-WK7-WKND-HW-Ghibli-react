import React, {useState, useEffect} from "react";
import FilmDetail from "../components/FilmDetail";

const FilmDetailBox = ({selectedFilm}) => {


    return (
        <div>
            <FilmDetail selectedFilm={selectedFilm}/>
        </div>
    )
}

export default FilmDetailBox