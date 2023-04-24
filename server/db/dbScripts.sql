CREATE DATABASE IF NOT EXISTS todo_db;
use todo_db;


DROP TABLE tasks;
CREATE TABLE IF NOT EXISTS tasks (
id INT NOT NULL,
task VARCHAR (50) NOT NULL,
task_date VARCHAR (30) NOT NULL,
completed boolean NOT NULL
);
