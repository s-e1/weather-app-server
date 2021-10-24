const express = require('express');
const { apikey, site } = require('../environmentalVars');
const { getCurrentWeather } = require('../utils/utils');

const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        const cityKey = req.query.key;
        const url = site + "currentconditions/v1/" + cityKey + "?apikey=" + apikey;
        const currentWeather = await getCurrentWeather(url);
        return res.json(currentWeather);
    })

module.exports = router;