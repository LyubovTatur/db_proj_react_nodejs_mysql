import React from 'react';
import Film from "./Film";


const FilmList = ({films, OpenFilmPage}) => {
    const Eventiks = ()=>{
        console.log('jopka klas')
    }
    return (
        <div className="film_list">
            {
                films.map((film) => {
                    return(
                         <Film onClick={() => console.log('hui')}  film={film} key={<film className="id"></film>}/>
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