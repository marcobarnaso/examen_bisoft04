require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const platilloRouter = require('./routers/platillo')

app.use(express.json())
app.use(cors())
app.use(platilloRouter)

const port = 3000

app.listen(port, () => {
    console.log(`El Servidor local está arriba y andando en el puerto ${port}.`);
  });