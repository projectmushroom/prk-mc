const express = require('express');
const router = express.Router();
const axios = require("axios");

axios.defaults.headers.common['Authorization'] = process.env.API_TOKEN

router.post("/", (req, res) => {
    axios.post(process.env.API_URL, {
        flow: process.env.FLOW_ID,
        urns: [`whatsapp:${req.body.number}`],
    })
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
});

module.exports = router;
