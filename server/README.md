## App
Harvey Lake Dragon Boats

This is a back end server built using Express Generator to support our final project for
Hartcode Academy. 

This back end server assumes a PostgreSQL User with the following:
+ username: hca
+ password: password
+ creds: DBA

## App Setup

To create the server follow the below steps in the CMD
```
$ mkdir server
$ cd server
$ npm install express body-parser pg pg-hstore sequelize -save
```

## PostgreSQL Setup
+ Create PostgreSQL DB User as defined above
+ Create a DB named demo in PostgreSQL using [pgAdmin4](http://127.0.0.1:49799/browser/)
+ Execute the following to build and populate the DB with test data
```
$ cd db
$ node migrate 
$ node seed
    
```
+ Create and Seed file is also included to verify database information within MySql

## Server Routes and Required Data

The following routes are built within the back end server.  

+ GET http://localhost:3000/users/admin/data
+ GET http://localhost:3000/users/update/:id
+ POST http://localhost:3000/users/register/
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
+ POST http://localhost:3000/users/login/
        username: req.body.username,
        password: req.body.password,
+ PUT http://localhost:3000/users/update/
        id: req.body.id,
        username: req.body.userName,
        email: req.body.email
+ DELETE http://localhost:3000/users/{userid}


## Test
+ run ```npm start```
+ Test using Postman Collection included in this repo.