const { Router, json } = require('express');
const request = require('request');
const router = Router();

const Holiday = require('../models/holiday');

router.route('/').get(async (req, res) => {
    const holidays = await Holiday.find();
    res.json(holidays);
});

router.post('/save-holidays', async (req, res) => {
    const newHolidays = new Holiday({
        holidays: req.body
    });
    await newHolidays.save();
    res.json({ message: 'Saved' });
});

router.put('/edit-holiday', async (req, res) => {
    const { _id, dia, mes, motivo, tipo, info } = req.body;

    Holiday.update(
        { 'holidays._id': _id },
        {
            '$set': {
                'holidays.$.dia': dia,
                'holidays.$.mes': mes,
                'holidays.$.motivo': motivo,
                'holidays.$.tipo': tipo,
                'holidays.$.info': info
            }
        },
        { new: true },
        function (err) {
        });

    res.json({ message: 'Updated' });
});

router.delete('/delete-holidays', async (req, res) => {
    await Holiday.findOneAndDelete();
    res.send({ message: 'Deleted' });
});

module.exports = router;
