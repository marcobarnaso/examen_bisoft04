require('dotenv').config()
const path = require('path')
const express = require("express")
const app = express()
const cors = require('cors')
const platilloRouter = require('./routers/platillo')

app.use(express.json())
app.use(cors())
app.use(platilloRouter)

const port = process.env.PORT

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('views', path.join(__dirname, '../templates/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(publicDirectoryPath))

app.get('/', (req, res)=> {
    res.render('landing', {
        title: 'Landing',
        name: 'Marvin Rojas'
    })
})

app.get('/registro', (req, res)=> {
    res.render('registro', {
        title: 'Landing',
        name: 'Marvin Rojas'
    })
})

app.get('/lista', (req, res)=> {
    res.render('menu', {
        title: 'Landing',
        name: 'Marvin Rojas'
    })
})

app.listen(port, () => {
    console.log(`El Servidor local está arriba y andando en el puerto ${port}.`);
  });