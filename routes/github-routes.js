const dotenv = require('dotenv');
const express = require('express');

dotenv.config()
const baseURL = process.env.BASE_URL

const router = express.Router()

router.get('/', (req, res) => {

    console.log(baseURL);
    return res.json({message:'Fala galera!'})
})

module.exports = router