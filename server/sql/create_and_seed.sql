drop database hca;
create database hca;
use hca;

create table USER (
	ID		 	int(10) NOT NULL AUTO_INCREMENT, 
	username 	varchar(255) NOT NULL, 
	email 		varchar(255) NOT NULL, 
    password    varchar(255) NOT NULL,
	is_admin	smallint(1) NOT NULL DEFAULT 0,
	createdAt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	UNIQUE		UQ_USER_1 (username),
	PRIMARY KEY(ID)
);

INSERT INTO User (username, email, password, is_admin, createdAt, updatedAt) VALUES ('Admin', 'admin@test.com', 'password', 1);

select * from user;