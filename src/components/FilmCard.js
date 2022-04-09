import React from "react";
import './FilmCard.css';
import classNames from "classnames";

const FilmCard = ({film, onFilmSelect, selectedFilm}) => {

    const handleClick = () => {
        onFilmSelect(film)
    }

    const filmClass = classNames("film-card", {
        "selected-film-card": selectedFilm === film
    })
    


    return (
        <div className={filmClass}>
            {/* <h3>{film.title}</h3> */}
            <p>{film.release_date}</p>
            <img src={film.image} onClick={handleClick}/>
        </div>
    )
}

export default FilmCard