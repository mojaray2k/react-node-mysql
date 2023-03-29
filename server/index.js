const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql");

const app = express();
const db = mysql.createConnection({
    user: "root",
    port: 3306,
    host: 'localhost',
    password: 'password',
    database: 'ReactNodeCrudDatabase'
})
// Init Middleware
// app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // const movie_name = "The Five Heartbeats";
    // const movie_review = "This movie is on all my favorite movie lists.";

    // db.query(
    //     'INSERT INTO movie_reviews (movie_name, movie_review) VALUES (?, ?)', [movie_name, movie_review],
    //     (err, result) => {
    //         if (err) {
    //             console.log("[mysql error]",err);
    //         }

            res.send("Hello World")
    //     }
    // );
    
})

app.listen(3001, (err) => {
    if (err) throw err;
    console.log("Server is running on port 3001");
});
