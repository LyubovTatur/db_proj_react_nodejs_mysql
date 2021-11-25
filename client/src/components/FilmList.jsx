import React from 'react';
import Film from "./Film";


const FilmList = ({films, OpenFilmPage}) => {


    return (
        <div className="film_list">
            {
                films.map((film) => {
                    return(
                         <Film  OpenFilmPage={OpenFilmPage} film={film} key={film.id}/>
                        // <img src={film.photo} alt="11"/>
                        // <img src={require(film.photo).default} alt="11"/>
                    )
                    }
                )
            }
        </div>
    );
};

export default FilmList;