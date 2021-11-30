import React, {useState} from 'react';

import p from '../images/film1.jpg'
import {NavLink, Router} from "react-router-dom";
import axios from "axios";


const Film = (props) => {
    return (
        <NavLink to='/film' onClick={() => props.OpenFilmPage(props.film)} className="film">
            <section>
                <div className="photo_film">
                    <img src={props.film.photo} alt="ww"/>
                </div>
                <div className="film_title">
                    {props.film.title}
                </div>
            </section>

        </NavLink>
    );
};
// <NavLink to="/film" onClick={getFilms}>film</NavLink><br/>
export default (Film);