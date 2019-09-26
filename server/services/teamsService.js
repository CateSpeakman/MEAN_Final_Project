var fs = require('fs');

var teamsService = {};

teamsService.teamsData = () => {

    try {
        res.end(fs.readFileSync('./data/teams.json'));
    } catch (err) {
        res.end('[]');
    };
};

module.exports = teamsService;