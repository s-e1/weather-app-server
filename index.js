const express = require('express');
const cors = require("cors");

const { port } = require("./environmentalVars");
const searchRouter = require('./routers/searchRouter');
const weatherRouter = require('./routers/weatherRouter');
const favoritesRouter = require('./routers/favoritesRouter');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/search', searchRouter);
app.use('/weather', weatherRouter);
app.use('/favorites', favoritesRouter);

app.listen(port);