This example assumes a PostgreSQL User with the following
+ username: hca
+ password: password
+ creds: DBA

## App Setup
```
$ mkdir demo
$ cd demo
$ npm init
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
## Server Routes and Required Data

+ GET http://localhost:3000/users/admin/data
+ GET http://localhost:3000/users/update/:id
+ POST http://localhost:3000/users/register/
        username, email, password
+ POST http://localhost:3000/users/login/
        username, password
+ PUT http://localhost:3000/users/update
        id, username, password
+ DELETE http://localhost:3000/users/{userid}


## Test
+ run ```npm start```
+ Test using Postman Collection