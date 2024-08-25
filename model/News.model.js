const mongoose = require("mongoose");
const NewsSchema = mongoose.Schema({
    titles: {
        type: String,
        required: true,
        // trim: true,
    },
    details: {
        type: String,
        required: true,
        // trim: true,
    },
    dates: {
        type: Date,
        required: true,
    }
})

const NewsModel = mongoose.model('news', NewsSchema);
module.exports = NewsModel;