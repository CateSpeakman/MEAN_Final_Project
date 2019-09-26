//require new custom Service Module
var userService = require('../services/userService');

var UserController = {};


// GET: http://localhost:3000/users/admin/data
UserController.adminData = (req, res) => {
    userService.listUsers()
        .then((users) => {
            if (users) {
                res.json(users);
            } else {
                res.json({ "error": "No Users found" });
            }
        })
        .catch((err) => {
            console.log(`Listing Users error: ${err}`);
            res.json({ "error": "Listing Users error" });
        });
};



// GET http://localhost:3000/users/update/:id
UserController.listUser = (req, res) => {
    let userId = req.params.id;
    userService.listUser(userId)
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.json({ "error": "No User found" });
            }
        })
        .catch((err) => {
            console.log(`Listing User error: ${err}`);
            res.json({ "error": "Listing User error" });
        });
};



// POST: http://localhost:3000/users/register/
UserController.postRegister = (req, res) => {
    userService.postRegister({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })//ends object
        .then((user) => {
            console.log(user);
            res.json(user);
        })//ends then 
        .catch((err) => {
            console.log(`Creating User error: ${err}`);
            res.end('Creating User error.');
        });
};


// POST: http://localhost:3000/users/login/
UserController.postLogin = (req, res) => {
    userService.postLogin({
        username: req.body.username,
        password: req.body.password,
    })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Creating User error: ${err}`);
            res.end('Creating User error.');
        });
};



// PUT: http://localhost:3000/users/update
UserController.putUpdate = (req, res) => {
    userService.update({
        id: req.body.id,
        user_name: req.body.userName,
        email: req.body.email

    })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Updating User error: ${err}`);
            res.end('Updating User error.');
        });
};

// DELETE: http://localhost:3000/users/{user_id} 
UserController.delete = (req, res) => {
    userService.delete(req.params.user_id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Deleting User error: ${err}`);
            res.end('Deleting User error.');
        });
};



module.exports = UserController;