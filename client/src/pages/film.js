import React from 'react';

const Film = ({film}) => {
    return (
        <div>
            <h1 className='film_page_title'>{film.title}</h1>
        <div className='film_page'>
            <div className="big_film_photo">
                <img src={film.photo} alt="what"/>
                {console.log(film)}
                {console.log(film)}
            </div>

            <div className="info_bout_film">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet delectus eum facilis labore laboriosam necessitatibus, reiciendis sapiente voluptatum. Eum in labore minus nostrum tenetur! Dolore dolorem dolores, doloribus ea explicabo itaque similique voluptates? Accusamus ad, aliquam beatae consequuntur doloribus ducimus exercitationem facilis impedit, incidunt iste maiores maxime modi nostrum perferendis perspiciatis quidem quod rem, saepe similique tenetur. Animi atque fugiat impedit, molestiae perspiciatis repellat sed sunt.
            </div>


        </div>
        </div>
    );
};

export default Film;