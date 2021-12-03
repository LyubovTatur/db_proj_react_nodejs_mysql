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

app.post('/addComment',(req,res)=>{

    const mark = req.body.mark
    const id_film = req.body.id_film
    const commentator = req.body.commentator
    const comment_text = req.body.comment_text

    db.query('insert into comments (commentator,id_film,comment_text,mark) values (?,?,?,?)',
        [commentator,id_film,comment_text,mark],
        (err,result) =>{
            if (err){
                console.log(err)
            }
            else{
                res.send("values inserted into comments")
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

app.get('/actor_film',(req,res)=>{

    db.query('select * from actor_film ',
        (err,result) =>{
            if (err){
                console.log(err)
            }
            else{
                res.send(result)
            }
        })



})


app.get('/actors',(req,res)=>{

    db.query('select * from actors ',
        (err,result) =>{
            if (err){
                console.log(err)
            }
            else{
                res.send(result)
            }
        })



})

app.get('/comments',(req,res)=>{

    db.query('select * from comments ',
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
