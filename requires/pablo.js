const express = require('express');

const app = express.Router();

app.get('/', function (req, res) {
    console.log('------')
    res.send('console.log("Hola, Petición GET recibida con exito")')  
})

app.post('/video', function (req, res) {
    console.log(req.body.name)
    console.log(req.body.weight)
    console.log(req.body.author)
    console.log(req.body.duration)
    res.send("Post video realizado correctamente")
})

app.get('/form', function (req, res) {
    res.json({
        Nombres: 'Pablo Andrés',
        Apellidos: 'Melo Cardozo',
        Numero: 3224488802,
        email: "pablocrdozo@gmail.com",
        tipo_de_sangre: "O-",
        eps: "famisanar",
        edad: 20
    });
});

module.exports = app;