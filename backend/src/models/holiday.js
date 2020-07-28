const { Schema, model } = require('mongoose');

const holidaySchema = new Schema({
    holidays: [{
        id: String,
        dia: Number,
        mes: Number,
        motivo: String,
        tipo: String,
        info: String
    }]
});


module.exports = model('Holiday', holidaySchema);
