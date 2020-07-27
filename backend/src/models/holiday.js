const { Schema, model } = require('mongoose');

const holidaySchema = new Schema({
    holidays: [{}]
});


module.exports = model('Holiday', holidaySchema);
