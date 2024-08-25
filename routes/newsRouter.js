const express = require("express");

const newsRouter = express.Router();
const { createNewsUpdate, getNewsDetails, deleteNewsDetails, } = require('../controllers/newsController')

newsRouter.get("/getdetails", getNewsDetails);
newsRouter.post("/postNewsDetails", createNewsUpdate);
newsRouter.delete("/deleteNewsDetails/:id", deleteNewsDetails);

module.exports = { newsRouter }  