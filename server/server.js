const express = require("express");
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

//body parsing store any info coming in into the req.body
//middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

db.once('open', () => {
    console.log(`Database running`);
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`)
    })
})

