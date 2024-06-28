const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    const options = {root: __dirname};
    res.sendFile('Index.Html', options);
});

app.listen(8080, () =>{
    console.log("Server is running on http://localhost:8080");
});

/* -- diff
const express = require('express');
const app = express();
const path = require(path); // Not sure if this was a typo

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(Server listening on port ${PORT}...);
});
*/