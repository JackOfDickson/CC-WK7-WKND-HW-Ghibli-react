import React from "react";

const FilmDetail = ({selectedFilm}) => {



    return (
        <div>
            <h2>{selectedFilm.title}</h2>
            <p>{selectedFilm.description}</p>
            <p>Rotten Tomatoes score: {selectedFilm.rt_score}</p>

            
        </div>
    )
}

export default FilmDetail