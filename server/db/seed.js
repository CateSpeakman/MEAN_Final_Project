const connection = require("./connection");
const usersData = require("./seed_data/users_data.json");

        connection.User.destroy({ where: {} }).then(() => {
            connection.User.bulkCreate(usersData).then(() => {
                process.exit();
            });
        });
    