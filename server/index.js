const express = require('express');
const app = express()
const mysql = require('mysql');
const cors = require('cors');

app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'1111',
    database:'db_films'
})

app.post('/create',(req,res)=>{
    const id = req.body.id
    const title = req.body.title
    const budget = req.body.budget
    const dues = req.body.dues
    const mark = req.body.mark
    const photo = req.body.photo

    db.query('insert into films values (?,?,?,?,?,?)',
        [id,title,budget,dues,mark,photo],
        (err,result) =>{
            if (err){
                console.log(err)
            }
            else{
                res.send("values inserted")
            }
        })



})


app.get('/films',(req,res)=>{

    db.query('select * from films',
        (err,result) =>{
            if (err){
                console.log(err)
            }
            else{
                res.send(result)
            }
        })



})





app.listen(3001,()=> {
    console.log("server start on port 3001 ")
})
