import './App.css';
import React, {useState} from "react";
import axios from "axios";
import filmPic from "./images/film1.jpg"
import Header from "./components/header";
import Footer from "./components/footer";
import Home from './pages/main'
import {BrowserRouter as Router, NavLink, Route, Routes} from "react-router-dom";

function App() {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [budget, setBudget] = useState('')
    const [dues, setDues] = useState('')
    const [mark, setMark] = useState('')

    const [films, setFilms] = useState([])

    const getFilms = () => {
        axios.get('http://localhost:3001/films',{

        }).then((response)=>{
            setFilms(response.data)
        })
    }

    const AddFilm = () =>{
        axios.post('http://localhost:3001/create',{
            id:id,
            title:title,
            budget:budget,
            dues:dues,
            mark:mark

        }).then(()=>{
            setFilms([...films,{
                id:id,
                title:title,
                budget:budget,
                dues:dues,
                mark:mark

            }])
            setId('')
            setTitle('')
            setBudget('')
            setDues('')
            setMark('')
            console.log('success')
        })
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
      <div className="App">
          {/*<Header/>*/}

          {/*<Home/>*/}
          <Router>
          <NavLink to="/zxc">ww</NavLink>
                <Routes>
                     <Route  path="/zxc" element={<Home/>} />
                </Routes>
          </Router>


      </div>
  );
}

export default App;
