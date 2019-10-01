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
+ password: hca
+ creds: hca
+ db name: hca


## Migrate DB
```
$ cd server\db
$ node migrate
$ node seed
```


## Start Server
```
$ cd server
$ npm install
$ npm start
```


## Test Server
- Use Postman Collection
- (http://localhost:3000/)


## Create a new Angular App
```
$ ng new client
```

## Serve Client
```
$ cd client
$ npm install
$ ng serve
```

## Test Client
- [Angular](http://localhost:4200/)
