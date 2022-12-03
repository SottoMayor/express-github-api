const githubController = require('../controllers/github-controller');
const express = require('express');
const router = express.Router()

router.get('/', githubController.healthCheck)
router.get('/api/users', githubController.getUsers)


module.exports = router