const githubController = require('../controllers/github-controller');
const express = require('express');
const router = express.Router()

router.get('/', githubController.healthCheck)
router.get('/api/users', githubController.getUsers)
router.get('/api/users/:username/details', githubController.getUser)
router.get('/api/users/:username/repos', githubController.getRepository)


module.exports = router