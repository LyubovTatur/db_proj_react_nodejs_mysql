import React from 'react';
import FilmList from "./FilmList";

const Section = ({title,films, OpenFilmPage}) => {
    return (
        <div className="section">
            <div className="title_box">
                {title}
            </div>
            <FilmList OpenFilmPage={OpenFilmPage}  films={films}/>
        </div>
    );
};

export default Section;