const express = require('express');
const routes = require('./routes/github-routes')
const app = express();

// Setting the CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Access-Methods', 'GET, POST, PATCH, PUT, DELETE');
    res.setHeader('Access-Control-Access-Headers', 'Content-Type, Authorization');
    next();
})

app.use(routes)

app.listen(8000)
