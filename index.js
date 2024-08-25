const connectedToMongodb = require("./configs/db");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const { indexRouter } = require("./routes");
const app = express();
const port = 5000;
app.use(express.json());
connectedToMongodb();


app.use(cookieParser());

app.use(cors({
    origin: true,
    methods: "GET ,POST ,DELETE ,PUT ,PATCH",
    credentials: true,
}))

app.use('/', indexRouter)

app.use(session({
    secret: "123456789",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.listen(port, () => {
    console.log(`LenscartClone listening on the port at http://localhost:${port}`)
})