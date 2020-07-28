const { Router, json } = require('express');
const request = require('request');
const router = Router();

const Holiday = require('../models/holiday');

router.route('/').get(async (req, res) => {
    const holidays = await Holiday.find();
    res.json(holidays);
});

router.post('/save-holidays', async (req, res) => {
    const { id, dia, mes, motivo, tipo, info } = req.body;

    const newHolidays = new Holiday({
        id: id,
        dia: dia,
        mes: mes,
        motivo: motivo,
        tipo: tipo,
        info: info
    });
    await newHolidays.save();
    res.json({ message: 'Saved' });
});

router.put('/edit-holiday', async (req, res) => {
    const { _id, dia, mes, motivo, tipo, info } = req.body;

    await Holiday.findOneAndUpdate({_id: _id}, {
        dia,
        mes,
        motivo,
        tipo,
        info
    });

    res.json({ message: 'Updated' });
});

router.delete('/delete-holidays', async (req, res) => {
    await Holiday.findOneAndDelete();
    res.send({ message: 'Deleted' });
});

module.exports = router;
