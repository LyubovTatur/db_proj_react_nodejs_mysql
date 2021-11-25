import React from 'react';
import filmPic from "../images/film1.jpg";
import FilmList from "../components/FilmList";
import Section from "../components/Section";

const Main = ({films}) => {
    return (
            <content>

                    {console.log('from main')}
                    {console.log(films)}
                    <Section films={films} title={'title1'}/>





            </content>

    );
};

export default Main;