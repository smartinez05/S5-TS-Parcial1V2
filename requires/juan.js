const express = require('express')
const app = express.Router();

module.exports = app;

//Petición get, muestra en pantalla la instrucción de salida de javascript
app.get('/JavaScript', function (req, res) {
    console.log("-----------");
    res.send('console.log("Hola Mundo")')  
  }) 
//Petición get, muestra en la pantalla la instrución de salida de java
app.get('/Java', function (req, res) {
    console.log("-----------");
    res.send('System.out.println("Hola Mundo")')
    
  }) 
//Se envia el texto (funcion post numero uno)  
app.post('/one', function (req, res) {
    console.log(req.body);
    res.send('funcion post numero uno')
  });