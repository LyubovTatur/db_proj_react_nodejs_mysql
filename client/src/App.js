import './App.css';
import React, {useState} from "react";
import axios from "axios";
import filmPic from "./images/film1.jpg"
import Header from "./components/header";
import Footer from "./components/footer";
import Home from './pages/main'
import {useNavigate, BrowserRouter as Router, NavLink, Route, Routes} from "react-router-dom";
import Film from "./pages/film";
import Actor from "./pages/actor";

function App() {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [budget, setBudget] = useState('')
    const [dues, setDues] = useState('')
    const [mark, setMark] = useState('')
    const [photo, setPhoto] = useState('')

    const [selectedFilm, setSelectedFilm] = useState('')
    const [films, setFilms] = useState([])
    const [actor, setActor] = useState('')
    const [filmsForActor, setFilmsForActor] = useState([])

    const getFilms = () => {
        axios.get('http://localhost:3001/films', {}).then((response) => {
            setFilms(response.data)

            // setFilms(response.data.map(film => {
            //     const photo = require(film.photo)
            //     film.photo=photo
            //
            // } ))
            // setFilms(films.map(film =>{film.photo = require(film.photo)}))
        })
        console.log(('фильмы получены'));
    }

    const [actor_film, setActor_film] = useState([])
    const getActor_film = () => {
        axios.get('http://localhost:3001/actor_film', {}).then((response) => {
            setActor_film(response.data)
        })
        console.log(('актер_фильм получены'));
    }
    const getActors = () => {
        axios.get('http://localhost:3001/actors', {}).then((response) => {
            setActors(response.data)
        })
        console.log(('актеры получены '));
    }
    const [actors, setActors] = useState([])


    const AddFilm = () => {
        axios.post('http://localhost:3001/create', {
            id: id,
            title: title,
            budget: budget,
            dues: dues,
            mark: mark,
            photo: photo

        }).then(() => {
            setFilms([...films, {
                id: id,
                title: title,
                budget: budget,
                dues: dues,
                mark: mark,
                photo: photo

            }])
            setId('')
            setTitle('')
            setBudget('')
            setDues('')
            setMark('')
            setPhoto('')
            console.log('success')
        })
    }

    const OpenFilmPage = (film) => {
        // let history = useNavigate()
        console.log(film.title)
        setSelectedFilm(film);
        // history('/film', {replace: true})

    }

    const OpenActorPage = (actor,e) => {
        console.log(actor)
        console.log('OpenActorPage')
        setActor(actor)


    }

    const FilmsForActor = (actor) => {
        const filmsForActorss = films.filter((film) => IsActorInThere(film))
        return filmsForActorss
    }

    const IsActorInThere = (filmm) => {
        const ActorsInFilm = actor_film.filter((e) => e.id_film === filmm.id)
        console.log(ActorsInFilm)
        let isInThisFilm = false
        ActorsInFilm.forEach(elem => {
                if (elem.id_actor === actor.id)
                    isInThisFilm = true
            }
        )
        return isInThisFilm
    }

    return (
        // <div className="App">
        //   <h1>films</h1>
        //
        //   <div className={'column'}>
        //     <label htmlFor="">id </label>
        //     <input type="text" onChange={(e)=>{setId(e.target.value)}} value={id}/>
        //   </div>
        //   <div className={'column'}>
        //     <label htmlFor="">title </label>
        //     <input type="text"  onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
        //   </div>
        //   <div className={'column'}>
        //     <label htmlFor="">budget </label>
        //     <input type="text"  onChange={(e)=>{setBudget(e.target.value)}} value={budget}/>
        //   </div>
        //   <div className={'column'}>
        //     <label htmlFor="">dues </label>
        //     <input type="text" onChange={(e)=>{setDues(e.target.value)}} value={dues}/>
        //   </div>
        //   <div className={'column'}>
        //     <label htmlFor="">mark </label>
        //     <input type="text" onChange={(e)=>{setMark(e.target.value)}} value={mark}/>
        //   </div>
        //     <button onClick={(AddFilm)}>Add</button>
        //     <button onClick={(getFilms)}>Get</button>
        //
        //     <table>
        //         <tr>
        //             <td>айди</td>
        //             <td>тайтл</td>
        //             <td>баджет</td>
        //             <td>дуес</td>
        //             <td>марк</td>
        //         </tr>
        //     {films.map((value,key) =>{
        //         return (
        //         <tr>
        //             <td>{value.id}</td>
        //             <td>{value.title}</td>
        //             <td>{value.budget}</td>
        //             <td>{value.dues}</td>
        //             <td>{value.mark}</td>
        //         </tr>
        //         )
        //     })}
        //     </table>
        //
        // </div>
        <div onClick={() => {
            getFilms();
            getActors();
            getActor_film()
        }} className="App">
            <Header/>
            <div className="photo_film">
            </div>
            {/*<Home/>*/}

            <Router>
                <NavLink to="/films" onClick={getFilms}>films</NavLink><br/>
                <NavLink to="/film" onClick={getFilms}>film</NavLink><br/>
                <NavLink exact to="/" onClick={getFilms}>na slesh</NavLink><br/>
                <NavLink exact to="/actor" onClick={getFilms}>actor</NavLink><br/>


                <Routes>
                    <Route path="/films" element={<Home OpenFilmPage={OpenFilmPage} films={films}/>}/>
                    <Route path="/film"
                           element={<Film OpenActorPage={OpenActorPage} actor_film={actor_film} actors={actors}
                                          film={selectedFilm}/>}/>
                    <Route path="/" element={''}/>
                    <Route path="/actor"  element={<Actor actor={actor} OpenFilmPage={OpenFilmPage} filmsForActor={FilmsForActor(actor)}/>}/>
                </Routes>
            </Router>
            <Footer/>


        </div>
    );
}

export default App;
