import React, {useState} from 'react';
import ActorsInFilm from "../components/ActorsInFilm";
import axios from "axios";

const Film = (props) => {
    const actorFilter = () => {
        const newActors = props.actors.filter((actor) =>
            IsInTheFilm(actor)
        )
        newActors.forEach(actor => {
            if (NameOfPersonForActor(actor) !== undefined)
                actor.name_of_person = NameOfPersonForActor(actor)
        })
        console.log('ОВЫЕ АКТЕРЫ');
        console.log(newActors);
        return newActors
    }


    const IsInTheFilm = (actor) => {
        const ActorsInFilm = props.actor_film.filter((e) => e.id_film === props.film.id)
        console.log(ActorsInFilm)
        let isInThisFilm = false
        ActorsInFilm.forEach(elem => {
                if (elem.id_actor === actor.id)
                    isInThisFilm = true
            }
        )
        return isInThisFilm
    }

    const NameOfPersonForActor = (actor) => {
        const ActorsInFilm = props.actor_film.filter((e) => e.id_film === props.film.id)
        console.log(ActorsInFilm)
        let name_of_person = false
        ActorsInFilm.forEach(elem => {
                if (elem.id_actor === actor.id)
                    name_of_person = elem.name_of_person

            }
        )
        if (name_of_person !== false)
            return name_of_person
    }

    const [comments, setComments] = useState([])

    const getComments = () => {
        axios.get('http://localhost:3001/comments', {}).then((response) => {
            setComments(response.data)
        })
        console.log(('comments получены'));
    }

    return (
        <div onLoad={() => getComments()}>
            <h1 className='film_page_title' >{props.film.title}</h1>
            <div className='film_page'>
                <div className="big_film_photo">
                    <img src={props.film.photo} alt="what"/>
                </div>

                <div className="info_bout_film">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet delectus eum facilis labore
                    laboriosam necessitatibus, reiciendis sapiente voluptatum. Eum in labore minus nostrum tenetur!
                    Dolore dolorem dolores, doloribus ea explicabo itaque similique voluptates? Accusamus ad, aliquam
                    beatae consequuntur doloribus ducimus exercitationem facilis impedit, incidunt iste maiores maxime
                    modi nostrum perferendis perspiciatis quidem quod rem, saepe similique tenetur. Animi atque fugiat
                    impedit, molestiae perspiciatis repellat sed sunt.
                </div>


            </div>
            <ActorsInFilm OpenActorPage={props.OpenActorPage} actors={actorFilter()}/>

            <form>
                <input type="email" className='comment'/>
                <textarea name="" id="" value='' cols="8" rows="10" className='comment'>

                </textarea>
                <input type="range"   min="1" max="10" className='comment'/>
            </form>

            {comments.map((comment)=>{
                return(
                    <div className='comment'>
                        <div className='comment commentator'>
                            {comment.commentator}
                        </div>
                        <div className=''>
                    </div>
                )
            })}


        </div>
    );
}


export default Film;