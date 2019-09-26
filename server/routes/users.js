var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller.js')


// GET http://localhost:3000/users/admin/data
router.get('/admin/data', controller.adminData);


// GET http://localhost:3000/users/update/:id
router.get('/update/:id', controller.listUser);


// POST: http://localhost:3000/users/register/
router.post('/register', controller.postRegister);


// POST http://localhost:3000/users/login
router.post('/login', controller.postLogin)


// PUT: http://localhost:3000/users/update
router.put('/update', controller.putUpdate);

// DELETE: http://localhost:3000/users/{user_id}
router.delete('/:user_id', controller.delete);

module.exports = router;