const mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "data_repository"

});


connection.connect(function (err) {
    if (err) throw err;
    console.log("Database connected!");
});

module.exports = connection;