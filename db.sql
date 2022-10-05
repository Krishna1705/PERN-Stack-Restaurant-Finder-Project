--for help    
--\?

--to crerte database 
--CREATE DATABASE practice;

--list all database
-- \l

--connect to database
-- \c db_name

--create a new table
-- CREATE TABLE products(id INT, name VARCHAR(100),price INT, on_sale BOOLEAN);

--list all tables inside database
--\d

--see detail of individual table 
--\d table_name

--modify a table(add column into a table)
--ALTER TABLE products ADD COLUMN featured boolean;

--delete content from table
--ALTER TABLE products DROP COLUMN featured;

--drop table
--DROP TABLE products;

-- drop database
-- DROP DATABASE practice;

--drop a table
-- DROP TABLE table_name;

-- ************************************for yelp project*******************
--create two folder 1)client 2)server
--1) client -frontend
--2) server -backend
-- npm init -y
-- npm install express
-- npm install dotenv
-- npm install nodemon
--npm i morgan
--npm install cors

--go to node-postgres.com
--$ npm install pg 
-- go to a link express async/await inside website
-- go to features--connecting inside of node-postgres.com inside website

---now frontend
--npx create-react-app client
--add bootstrap and fontawesome cdn links inside public/index.html files.
--    