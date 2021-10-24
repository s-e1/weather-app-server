const port = process.env.PORT || 8000;
const site = "http://dataservice.accuweather.com/";
const apikey = process.env.apikey || "GlCA7pPuzQ6aX4PTHg9wPNsdhjXAiRrJ";
// const apikey = process.env.apikey || "put an apikey here";

module.exports = { port, site, apikey };