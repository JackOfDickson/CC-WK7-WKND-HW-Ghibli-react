import React from "react";
import FilmCard from "./FilmCard";

const FilmList = ({films}) => {

    const FilmItems = films.map((film, index) => {
        return <FilmCard film={film} key={index}/>
    })

    return (
        <div>
            <h2>Film List</h2>
            {FilmItems}
        </div>
    )
}

export default FilmList