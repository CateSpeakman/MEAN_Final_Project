//require new custom Service Module
var leaguesService = require('../services/leaguesService');

var LeagueController = {};


// GET: http://localhost:3000/leagues
LeagueController.league = (req, res) => {
    res.render('leagues');
};



// GET: http://localhost:3000/leagues/data
LeagueController.leaguesData = (req, res) => {
    leaguesService.leaguesData(req, res);
};


module.exports = LeagueController;


    