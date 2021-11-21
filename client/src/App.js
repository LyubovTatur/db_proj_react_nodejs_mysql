import './App.css';
import {useState} from "react";
import axios from "axios";


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
            console.log('success')
        })
    }



  return (
    <div className="App">
      <h1>films</h1>

      <div className={'column'}>
        <label htmlFor="">id </label>
        <input type="text" onChange={(e)=>{setId(e.target.value)}} value={id}/>
      </div>
      <div className={'column'}>
        <label htmlFor="">title </label>
        <input type="text"  onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
      </div>
      <div className={'column'}>
        <label htmlFor="">budget </label>
        <input type="text"  onChange={(e)=>{setBudget(e.target.value)}} value={budget}/>
      </div>
      <div className={'column'}>
        <label htmlFor="">dues </label>
        <input type="text" onChange={(e)=>{setDues(e.target.value)}} value={dues}/>
      </div>
      <div className={'column'}>
        <label htmlFor="">mark </label>
        <input type="text" onChange={(e)=>{setMark(e.target.value)}} value={mark}/>
      </div>
        <button onClick={(AddFilm)}>Add</button>
        <button onClick={(getFilms)}>Get</button>

        <table>
            <tr>
                <td>айди</td>
                <td>тайтл</td>
                <td>баджет</td>
                <td>дуес</td>
                <td>марк</td>
            </tr>
        {films.map((value,key) =>{
            return (
            <tr>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.budget}</td>
                <td>{value.dues}</td>
                <td>{value.mark}</td>
            </tr>
            )
        })}
        </table>
    </div>
  );
}

export default App;
