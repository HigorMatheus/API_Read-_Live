//importando express 
const express = require('express');

//importando body-parser
const bodyParser = require('body-parser')

//inportando rotas
const router =require('./router');

// iniciando uma api
const app = express()

// para receber e emviar informaçoes em Json 
app.use(bodyParser.json())

// para entender os parametros por  url
app.use(bodyParser.urlencoded({ extended: false}))

// utilizando as rotas da api 
app.use('/',router);


// iformando a porta que a api vai funcionar 
app.listen(3001);