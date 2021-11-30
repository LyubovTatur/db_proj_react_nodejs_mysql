import React from 'react';
import {NavLink} from "react-router-dom";

const ActorsInFilm = (props) => {
    return (

        <div className="section">
            <div className="film_list">


                {
                    props.actors.map((actor) => {
                            return (
                                <NavLink to='/actor' onClick={() => props.OpenActorPage(actor)} className="actor">
                                    <div className='actor_item'>
                                        <div className="actor_photo">
                                            <img src={actor.photo} alt="ww"/>
                                        </div>
                                        <div className="actor_fio">
                                            {actor.name_of_person}
                                        </div>
                                    </div>
                                </NavLink>

                            )
                        }
                    )}
            </div>
        </div>
    );
};

export default ActorsInFilm;