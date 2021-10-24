const axios = require('axios');

const getCityKeys = async (url) => {
    try {
        const reply = await axios.get(url);
        const filteredData = reply.data.map(e => {
            return { key: e.Key, cityName: e.LocalizedName, countryName: e.Country.LocalizedName }
        })
        return filteredData;
    } catch (error) {
        console.log(error);
    }
}

const getCurrentWeather = async (url) => {
    try {
        const reply = await axios.get(url);
        const { WeatherText: text, WeatherIcon: iconNumber } = reply.data[0];
        const temperature = reply.data[0].Temperature.Metric.Value;
        const icon = String(iconNumber);
        return { text, icon, temperature };
    } catch (error) {
        console.log(error);
    }
}

const getForecast = async (url) => {
    try {
        const reply = await axios.get(url);
        const filteredData = reply.data.DailyForecasts.map(e => {
            const farenheitMax = e.Temperature.Maximum.Value;
            const farenheitMin = e.Temperature.Minimum.Value;
            const celsiusMax = Math.round((farenheitMax - 32) * 5 / 9);
            const celsiusMin = Math.round((farenheitMin - 32) * 5 / 9);
            return { high: celsiusMax, low: celsiusMin };
        })
        return filteredData;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getCurrentWeather, getForecast, getCityKeys };