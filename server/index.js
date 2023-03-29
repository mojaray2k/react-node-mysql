const express = require("express");
const morgan = require("morgan");

const app = express();
// Init Middleware
// app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(3001, (err) => {
    if (err) throw err;
    console.log("Server is running on port 3001");
});
