const { Schema, model } = require('mongoose');

const holidaySchema = new Schema({
    id: String,
    dia: Number,
    mes: Number,
    motivo: String,
    tipo: String,
    info: String
});


module.exports = model('Holiday', holidaySchema);
