const express = require('express')

const router = express.Router();

app.get('/JavaScript', function (req, res) {
    console.log("-----------");
    res.send('console.log("Hola Mundo")')  
  }) 
  
  app.get('/Java', function (req, res) {
    console.log("-----------");
    res.send('System.out.println("Hola Mundo")')
    
  }) 
  
  app.post('/one', function (req, res) {
    console.log(req.body);
    res.send('funcion post numero uno')
  });