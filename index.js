const express = require("express");
const path = require("path")
const app = express();
const router = express.Router();

// directory/files *should* be case sensitive to avoid fuckery
const index_path = "index.html"

// basically json post middleware I.E: express.json(); Nifty indeed...
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname));

// Serve static folder "Resources"
app.use(express.static(path.join(__dirname, 'Resources')))

/* -- ROUTES -- */

router.get('/', function (req, res) {
    const options = {root: __dirname};
    res.sendFile(index_path, options);
});

// As described in diff/google documentation
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:8080");
});