import React from "react";
import FilmCard from "./FilmCard";

const FilmList = ({films}) => {

    //sort films alpabetically
    films.sort(function (a,b) {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
      
        return 0;
    })

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