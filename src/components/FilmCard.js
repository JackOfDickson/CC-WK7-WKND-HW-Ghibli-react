import React from "react";
import './FilmCard.css'

const FilmCard = ({film}) => {
    


    return (
        <div className="film-card">
            <h3>{film.title}</h3>
            <p>{film.release_date}</p>
            <img src={film.image}/>
        </div>
    )
}

export default FilmCard