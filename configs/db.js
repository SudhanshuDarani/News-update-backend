const mongoose = require('mongoose');
const mongooseURL = "mongodb+srv://sudhanshu:newsDatabase@news-update.acxgt84.mongodb.net/?retryWrites=true&w=majority&appName=news-update";

const connectedToMongodb = async () => {
    try {
        const connection = await mongoose.connect(mongooseURL);
        console.log("connected to mongodb");
    } catch (error) {
        console.log(error.message); 
    }
}
module.exports = connectedToMongodb;