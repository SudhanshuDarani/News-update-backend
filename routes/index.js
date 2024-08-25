const express = require('express');
const { newsRouter } = require('./newsRouter')
const morgan = require("morgan");
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    return res.send(true);
})
indexRouter.use("/newsUpdate", newsRouter);
indexRouter.use(morgan("dev"));


module.exports = { indexRouter } 