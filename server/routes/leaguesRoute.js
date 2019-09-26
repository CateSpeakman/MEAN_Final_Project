var express = require('express');
var router = express.Router();
const controller = require('../controllers/leaguesController.js')


//GET http://localhost:3000/leagues
router.get('/', controller.league);


//GET http://localhost:3000/leagues/data
router.get('/data', controller.leaguesData);


module.exports = router;