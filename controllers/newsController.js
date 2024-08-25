const NewsModel = require("../model/News.model");
require("dotenv").config();
const jwt = require("jsonwebtoken")

const getNewsDetails = async (req, res) => {
    try {
        const getNews = await NewsModel.find()
        res.status(200).send(getNews)
    } catch (err) {
        console.log(err.message);
        res.send({ "msg": err.message });
    }
};

const createNewsUpdate = async (req, res) => {
    try {
        const { titles, dates, details } = req.body;
        if (!titles) {
            return res.send({ error: "Title is Required" })
        }
        if (!dates) {
            return res.send({ error: "Date is Required" })
        }
        if (!details) {
            return res.send({ error: "Detail is Required" })
        }
        const newsDetail = await new NewsModel({ titles, dates, details });
        await newsDetail.save();
        res.status(200).send({
            success: true,
            message: "News created successfully !!",
            news: newsDetail,
        });
    } catch (err) {
        console.log(err)
        res.send({ msg: "not saving to the mongoDB", error: err })
    }
};


const deleteNewsDetails = async (req, res) => {
    const { id } = req.params;
    try {
        await NewsModel.findByIdAndDelete({ _id: id },req.body);
        res.send({"msg":`News has been deleted`})
    } catch (err) {
        res.send({ "msg": err.message });
    }
};

module.exports = { getNewsDetails, createNewsUpdate,  deleteNewsDetails }