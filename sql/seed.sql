

INSERT INTO department 
    (name)
VALUES 
("Management"),
("sales"),
("marketing"),
("human resourses"),
 ("custumer servises");



INSERT INTO role 
    (title, salary, department_id)
VALUES 
("chief of opperations", "100000", 1),
("sales manager", "90000", 2),
("graphic designer", "95000", 3),
("highering manager", "85000", 4),
("custumer services represetative", "70000", 5);

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES
 ("Austin", "Hamilton", 2, 3),
("kate", "shively", 2, 1),
("Sam","Cates", 3, 1),
("john", "Braswell", 4, 3),
("Piper","May", 1, 2);









