const express = require('express');
const { apikey, site } = require('../environmentalVars');
const { getCurrentWeather, getForecast } = require('../utils/utils');

const router = express.Router();

router.route('/')
    .get((req, res) => {
        const cityKey = req.query.key;
        const url1 = site + "currentconditions/v1/" + cityKey + "?apikey=" + apikey;
        const url2 = site + "forecasts/v1/daily/5day/" + cityKey + "?apikey=" + apikey;

        const currentWeather = getCurrentWeather(url1);
        const forecast = getForecast(url2);

        Promise.all([currentWeather, forecast])
            .then((values) => {
                return res.json({ currentWeather: values[0], forecast: values[1] });
            })
            .catch(console.log);
    })

module.exports = router;