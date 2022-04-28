const express = require("express")
require('../db/mongoose')
const router = new express.Router()
const Platillo = require('../models/platillo-model')

router.post('/platillo', async (req, res)=>{
    console.log(req.body)
    try {
        const platillo = new Platillo(req.body)
        await platillo.save()
        res.status(201).send(platillo)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/platillo', async (req, res) => {
    try {
        let platillos = await Platillo.find({})
        res.status(200).send(platillos)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router