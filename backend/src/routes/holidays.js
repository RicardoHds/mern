const { Router, json } = require('express');
const request = require('request');
const router = Router();

const Holiday = require('../models/holiday');

router.route('/').get(async (req, res) => {
    const holidays = await Holiday.find();
    res.json(holidays);
});

router.route('/:id')
    .put()
    .delete()

router.post('/save-holidays', async (req, res) => {
    const newHolidays = new Holiday({
        holidays: req.body
    });
    await newHolidays.save();
    res.json({ message: 'Saved' });
});


module.exports = router;
