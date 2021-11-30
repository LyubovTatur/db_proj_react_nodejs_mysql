import React, {useState} from 'react';
import Film from "./Film";
import axios from "axios";




const FilmList = ({films, OpenFilmPage}) => {

  return (
        <div className="film_list"   >
            {
                films.map((film) => {
                    return(
                         <Film   OpenFilmPage={OpenFilmPage} film={film} key={film.id}/>

                    )
                    }
                )
            }
        </div>
    );
};

export default FilmList;