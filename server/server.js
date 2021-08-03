// Importing required modules
const cors = require('cors');
const express = require('express');

// parse env variables
require('dotenv').config();

// Configuring port
const port = process.env.PORT || 8080;

const app = express();

// Configure middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

// Defining route middleware
app.use('/api', require('./routes/api'));


// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}`);

module.exports = app;
