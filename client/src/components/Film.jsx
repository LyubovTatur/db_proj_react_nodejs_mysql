import React from 'react';

import p from '../images/film1.jpg'
import {NavLink, Router} from "react-router-dom";

const Film = (props) => {
    return (
            <NavLink to='/film' onClick={() => props.OpenFilmPage(props.film)} className="film">
                <div className="photo_film">
                    <img src={props.film.photo} alt="ww"/>
                </div>
                <div className="film_title">
                    {props.film.title}
                </div>
            </NavLink>
    );
};
// <NavLink to="/film" onClick={getFilms}>film</NavLink><br/>
export default (Film);