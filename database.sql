DROP DATABASE IF EXISTS management_system_db;

CREATE DATABASE management_system_db;

USE management_system_db;

CREATE TABLE department (
    id INT PRIMARY KEY auto_increment NOT NULL,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT PRIMARY KEY auto_increment NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
    id INT PRIMARY KEY auto_increment NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT 
);


INSERT INTO department (name) VALUES 
    ('Sales'), 
    ('Estimating'), 
    ('Overhead');

INSERT INTO role (title, salary, department_id) VALUE 
    ('Receptionist', $35,000, 'Overhead'), 
    ('Production Estimator', $30,900, 'Estimating'), 
    ('Customer Service Representative', $40,000, 'Sales');

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
    ('Jenni', 'Rams', 1, 1),
    ('Ann', 'Cabana', 2, 2);