DROP DATABASE IF EXISTS burgers_db; 

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT 0,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(item_id)
);


INSERT INTO burgers (burger_name)
VALUES("Bacon Cheese Burger");

INSERT INTO burgers (burger_name)
VALUES("Jersey Burger");

INSERT INTO burgers (burger_name)
VALUES("Taco Burger");

select * from burgers
