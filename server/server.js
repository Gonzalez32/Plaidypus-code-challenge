require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();


const SearchAPI = require('./routes/SearchAPI');
const BusinessAPI = require('./routes/BusinessAPI');
const API_KEY = process.env.API_KEY

// Tool to deBug
app.use(morgan('dev'))

// Sets up route for a call to Yelp API search
app.get('/search', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (!req.query.location) {
        res.status(400).send({error: 'Location not specifyed in query parameters.'});
    } else if (typeof req.query.location !== 'string') {
        res.status(400).send({error: 'Location query parameter is not a string.'});
    }  else {
        req.query.location = req.query.location.replace(/ /g, '%20');
        let request = new SearchAPI(API_KEY);
        request.search(res, req.query.location);
    }
});

// Sets up route for a call to Yelp business API search
app.get('/business', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (!req.query.id) {
        res.status(400).send({error: 'Business ID not specifyed in query parameters.'});
    } else if (typeof req.query.id !== 'string') {
        res.status(400).send({error: 'Business ID query parameter is not a string.'});
    }  else {
        req.query.id = req.query.id.replace(/ /g, '%20');
        let request = new BusinessAPI(API_KEY);
        request.details(res, req.query.id);
    }
});

const port = process.env.PORT || 3005;
app.listen(3001, () => {
    console.log(`Server is up && listening on port: ${port}`);
});