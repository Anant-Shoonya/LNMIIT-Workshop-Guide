import { Router } from "express";

Router.post('/login', (req, res)=>{
    res.send('login success');
})
Router.post('/signup', (req, res)=>{
    res.send('signup success');
})