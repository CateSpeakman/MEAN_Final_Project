//require new custom Service Module
var teamsService = require('../services/teamsService');

var TeamController = {};


// GET: http://localhost:3000/teams
TeamController.teams = (req, res) => {
    res.render('teams');
};

// GET: http://localhost:3000/teams/data
TeamController.teamsData = (req, res) => {
    teamsService.teamsData ();
};

module.exports = TeamController;

