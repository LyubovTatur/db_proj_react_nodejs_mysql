import React from 'react';

const Film = ({films}) => {
    return (
        <div className='film_page'>
            <div className="big_film_photo">
                <img src={films[0].photo} alt="what"/>
                {console.log(films)}
                {console.log(films[0])}
            </div>

            <div className="info_bout_film">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi modi, molestias. Aspernatur ea earum illum ipsum iste molestias quidem, reprehenderit? Distinctio, eaque maxime natus odio quae quasi similique unde vitae. A animi at eaque est eveniet nihil quidem, sit unde vel velit vero?
            </div>


        </div>
    );
};

export default Film;