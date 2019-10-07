const express = require('express');
const path = require('path');
var cors = require('cors')
const app = express();
const port = 3000;
// app.use(cors());
app.get("/", (req, res) => res.sendFile(path.join(__dirname + '/APIAuthentication/authPage.html')));
app.listen(port, () => console.log(`Listening on port ${port}`));