var express = require('express');
var router = express.Router();
const controller = require('../controllers/teamsController.js')


//GET http://localhost:3000/teams
router.get('/', controller.teams);


//GET http://localhost:3000/teams/data
router.get('/data', controller.teamsData);


module.exports = router;