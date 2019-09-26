const User = require('../db/connection').User;

// The Service uses the Sequelize ORM for DB CRUD operations
// and returns results to the calling Controller

var userService = {};

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


userService.listUsers = () => {
    return User.findAll({ where: { is_admin: 0 }})
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
};


userService.update = (userObj) => {
    return User.update({ user_name: userObj.user_name, email: userObj.email }, { where: { ID: userObj.id } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};


userService.listUser = (userId) => {
    return User.findByPk(userId)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};




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