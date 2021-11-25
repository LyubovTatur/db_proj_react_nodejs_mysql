import React from 'react';
import FilmList from "./FilmList";

const Section = ({title,films}) => {
    return (
        <div className="section">
            <div className="title_box">
                {title}
            </div>
            <FilmList films={films}/>
        </div>
    );
};

export default Section;