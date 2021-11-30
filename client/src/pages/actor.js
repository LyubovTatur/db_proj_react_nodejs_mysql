import React from 'react';
import Section from "../components/Section";



const Actor = (props) => {
    return (
        <div className="actor_page">
            <div className="actor_info">
                <div className='actor_big_pic'>
                    <img src={props.actor.photo} alt=""/>
                    {props.actor.fio}
                </div>
                <div className="info_baut_actor">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, at aut beatae, cum eos eum impedit iure, molestiae molestias nesciunt nostrum sit voluptatum. Accusamus incidunt similique tenetur velit voluptates? Ab consequuntur eaque earum est nihil. Aliquid asperiores atque consequuntur cupiditate dolorem dolores eligendi eos ex excepturi exercitationem explicabo iste itaque necessitatibus neque, nostrum officia omnis possimus quis rem veritatis voluptates.
                </div>
            </div>
                <Section OpenFilmPage={props.OpenFilmPage} films={props.filmsForActor}/>
        </div>
    );
};

export default Actor;