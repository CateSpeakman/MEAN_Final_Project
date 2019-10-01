const User = require('../db/connection').User;

// The Service uses the Sequelize ORM for DB CRUD operations
// and returns results to the calling Controller

var userService = {};

//this service will post a new user to the database
userService.postRegister = (userObj) => {
    console.log(userObj);
    return User
        .create(userObj)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

//this service will call the database when a user attempts to log in
userService.postLogin = (userObj) => {
       return User.findOne({
               where: userObj
            })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

//this service will find and send back all users that are non admins
userService.listUsers = () => {
    return User.findAll({ where: { is_admin: 0 }})
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
};

//this service will update a users email
userService.update = (userObj) => {
    return User.update({ user_name: userObj.user_name, email: userObj.email }, { where: { ID: userObj.id } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

//this service will find a user within the database based on their user id
userService.listUser = (userId) => {
    return User.findByPk(userId)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};


//this service will delete a user based on the user id that was sent from the front end
userService.delete = (userId) => {
   
    return User.destroy({ where: { ID: userId } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        });
};

module.exports = userService;