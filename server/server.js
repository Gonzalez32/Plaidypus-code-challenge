require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'))



// Get all Businesses
app.get("/api/v1/getBusinesses", (req, res) => {
    // console.log("get all businesses");
    res.status(200).json({
        status: "success",
        data: {
            businesses: ["handyman", "fixman"]
        },
    })
});

// Get a businesses
app.get("/api/v1/business/:id", (req, res) => {
    console.log(req.params);
});


const port = process.env.PORT || 3005;
app.listen(3001, () => {
    console.log(`Server is up and listening on port: ${port}`);
})