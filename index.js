const express = require("express");

const app = express();

app.listen(8080, () =>{
    console.log("Server is running on http://localhost:8080");
});

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    const options = {root: __dirname};
    res.sendFile('index.html', options);
});