const mongoose = require('mongoose');
const { Schema } = mongoose;

const Task = new Schema({
    TITULO: String,
    DESCRICCION: String,
    CEDULA_USUARIO_ASIGNADO: String,
    ID_ADMIN_GRUPO: String,
    ESTADO: String, 
    FECHA: {type: Date, default: Date.now},
})
module.exports = mongoose.model('Task', Task);