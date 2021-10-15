const express = require('express');
require('dotenv').config();

const app = express();

// Route
app.get("/getRestaurants", (req, res) => {
    console.log("get all restaurants");
});

const port = process.env.PORT || 3005;
app.listen(3001, () => {
    console.log(`Server is up and listening on port: ${port}`);
})