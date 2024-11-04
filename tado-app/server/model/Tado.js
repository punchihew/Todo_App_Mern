const mongoose = require('mongoose')

const TadoSchema = new mongoose.Schema({
     task: String
})

const TadoModel = mongoose.model("tados",TadoSchema)
module.exports = TadoModel 
