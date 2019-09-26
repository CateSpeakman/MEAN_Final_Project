var auth = {

    authorize: function(userName, password, users) {
        var validUser = users.filter((user) => {
            return user.userName === userName && user.password === password;
        });

        if (validUser.length === 1) {
            return true;
        }
        return false;
    }
};

module.exports = {
    auth
};