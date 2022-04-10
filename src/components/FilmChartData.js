import React from "react";
import { Chart } from "react-google-charts"

const FilmChartData = ({films}) => {

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

    const rtChartData = [["Film", "Rotten Tomatoes Score"]]

    films.map(film => {
        const currentFilm = [film.title, Number(film.rt_score)]
        rtChartData.push(currentFilm)
    })

    return (
        <div>
            <Chart 
                chartType="BarChart"
                data={rtChartData}
                height="800px"
            />
        </div>
    )
}

export default FilmChartData