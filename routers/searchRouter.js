const express = require('express');
const { apikey, site } = require('../environmentalVars');
const { getCityKeys } = require('../utils/utils');

const router = express.Router();

router.route("/")
    .get(async (req, res) => {
        const name = req.query.name;
        const url = site + "locations/v1/cities/autocomplete?apikey=" + apikey + "&q=" + name;
        const cityKeys = await getCityKeys(url);
        return res.json(cityKeys);
    })

module.exports = router;