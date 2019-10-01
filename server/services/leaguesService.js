var fs = require('fs');

var leaguesService = {};

//this service will send back the leagues information from a JSON file and return data

leaguesService.leaguesData = (req, res) => {

    try {
        res.end(fs.readFileSync('./data/leagues.json'));
    } catch (err) {
        res.end('[]');
    };
};

module.exports = leaguesService;