### App


Note: This example uses [PostgreSQL](https://www.postgresql.org/) in place of [MongoDB](https://www.mongodb.com/) for a Database. 


## Create a new Express App
```
$ express --view=hbs server
$ cd server
$ npm install body-parser pg pg-hstore sequelize -save
```

See demo code.

## Create PostgreSQL User and DB
+ username: hca
+ password: password
+ creds: DBA
+ db name: demo


## Migrate DB
```
$ cd server\db
$ node migrate
```


## Start Server
```
$ cd server
$ npm install
$ npm start
```


## Test Server
- Use Postman Collection
- [HBS](http://localhost:3000/)


## Create a new Angular App
```
$ ng new client
```

See demo code.


## Serve Client
```
$ cd client
$ npm install
$ ng serve
```


## Test Client
- [Angular](http://localhost:4200/)
