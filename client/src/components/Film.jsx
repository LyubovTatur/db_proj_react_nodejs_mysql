import React from 'react';
import p from '../images/film1.jpg'

const Film = ({film}) => {
    return (
        <button className="film">
            <div className="photo_film">
                <img src={film.photo} alt="ww"/>
            </div>
            <div className="film_title">
                {film.title}
            </div>
        </button>
    );
};

export default Film;