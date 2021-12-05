DROP DATABASE IF EXISTS employeeTracker;
CREATE DATABASE employeeTracker;
 USE employeeTracker;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    title VARCHAR(50) NOT NULL,
    salary INTEGER NOT NULL,
    department_id INTEGER NOT NULL,
     PRIMARY KEY (id)

);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER NOT NULL,
    PRIMARY KEY (id)
);

