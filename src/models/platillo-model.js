const mongoose = require("mongoose");

const platilloSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    ingredientes: {
        type: String,
        trim: true,
        required: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    }
},{timestamps: true});

const Platillo = mongoose.model("platillo", platilloSchema)

module.exports = Platillo
