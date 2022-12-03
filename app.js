const express = require('express');
const routes = require('./routes/github-routes')
const app = express();

app.use(routes)

app.listen(8000)
