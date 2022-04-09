import React from "react";
import "./FilmDetail.css"

const FilmDetail = ({selectedFilm, setSelectedFilm}) => {

const unselect = () => {
    setSelectedFilm(null)
}



    return (
        <div className="film-detail">
            <h2>{selectedFilm.title} - {selectedFilm.release_date}</h2>
            <h3>{selectedFilm.original_title} - {selectedFilm.original_title_romanised}</h3>
            <button onClick={unselect}>Unselect</button>
            <p>{selectedFilm.description}</p>
            <p>Rotten Tomatoes score: {selectedFilm.rt_score}</p>

            
        </div>
    )
}

export default FilmDetail