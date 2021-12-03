

INSERT INTO department (name)
VALUES ("Management");
INSERT INTO department (name)
VALUES ("sales");
INSERT INTO department (name)
VALUES ("marketing");
INSERT INTO department (name)
VALUES ("human resourses");
INSERT INTO department (name)
VALUES ("custumer servises");



INSERT INTO role (title, salary, department_id)
VALUES ("management", "100000", 1);
INSERT INTO role (title, salary, department_id)
VALUES("sales", "90000", 2);
INSERT INTO role (title, salary, department_id)
VALUES ("marketing", "95000", 3);
INSERT INTO role (title, salary, department_id)
VALUES ("human resourses", "85000", 4);
INSERT INTO role (title, salary, department_id)
VALUES ("custumer servises", "70,000", 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Austin", "Hamilton", 2, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("kate", "shively", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Sam","Cates", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
Values("john", "Braswell", 4, 3)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
Values("Piper","May", 1, 2)









