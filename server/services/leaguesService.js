var fs = require('fs');

var leaguesService = {};

leaguesService.leaguesData = (req, res) => {

    try {
        res.end(fs.readFileSync('./data/leagues.json'));
    } catch (err) {
        res.end('[]');
    };
};

module.exports = leaguesService;