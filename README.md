### App

## Harvey Lake Dragon Boats

This is the client and server of the final project for Hartcode Academy. This application
will allow a user to do the following:
+ register a new user
+ log in an existing user
+ edit email on existing user
+ naviagate to a landing page as an authenticated user to view a dropdown of dragon baot leagues
to choose from
+ allow a user who has admin rights to navigate to the admin page and view all users who do not have rights.  

Note: This application uses [PostgreSQL](https://www.postgresql.org/) for a Database. 


## Create a new Express App
```
$ express --view=hbs server
$ cd server
$ npm install body-parser pg pg-hstore sequelize -save
```

## Create PostgreSQL User and DB
+ username: hca
+ password: password
+ creds: DBA
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
