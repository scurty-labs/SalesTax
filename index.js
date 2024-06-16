const express = require("express");

const app = express();

app.listen(4040, () =>{
    console.log("Server is running on http://localhost:4040");
});

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    const options = {root: __dirname};
    res.sendFile('index.html', options);
});