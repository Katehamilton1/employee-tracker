const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require(`console.table`);


var connection = mysql.createConnection({
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "hamilton",
    database: "employeeTracker",
});
connection.connect(function (err) {
    if (err) throw err;
});

function firstPrompt() {

    inquirer.prompt([{
        type: "list",
        name: "choice",
        message: "what would you like to do?",
        choices:
            ["View all employees",
                "View all employees by department",
                "View all employees by role",
                "Add employee",
                "Add department",
                "Add role",
                "Update employee role",

                "End"]
    }])
        .then(function (answers) {
            switch (answers.choice) {
                // Variety of cases that fire a function depending on the selection from prompt
                case "View all employees":
                    viewEmployees();
                    break;

                case "View all employees by department":
                    viewDepartment();
                    break;

                case "View all employees by role":
                    viewRole();
                    break;

                case "Add employee":
                    addEmployee();
                    break;

                case "Add department":
                    addDepartment();
                    break;


                case "Add role":
                    addRole();
                    break;


                case "Update employee role":
                    updateRole();
                    break;


                case "End":
                    connection.end();
                    break;

                default:
                    console.log("You have made an invalid choice.")
                    firstPrompt()
            }
        })
}




function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, data) {
        console.log(data);
        firstPrompt();
    })
}

function viewDepartment() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.log(data);
        firstPrompt();
    })
}

function viewRole() {
    connection.query("SELECT * FROM role", function (err, data) {
        console.log(data);
        firstPrompt();
    })
}


function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter employee's first name:",
            name: "first_name"
        },
        {
            type: "input",
            message: "Please enter employee's last name:",
            name: "last_name"
        },
        {
            type: "input",
            message: "What is the employee's role(role id number)?",
            name: "role_id"
        },
        {
            type: "input",
            message: "Who is the employees manager(managerId number)?",
            name: "manager_id"
        },
    ])
        .then(function (answer) {
            console.log(answer)
    
            connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answer.first_name}", "${answer.last_name}", ${answer.role_id},${answer.manager_id})`, function (err, data) {
                if (err) throw err;
                console.table("Employee info added");
                firstPrompt();
            });
        })
        .catch(function (error) {
            // handle error
        });

}



function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "What department do you want to add?"
        },
    ])
        .then(function (answer) {
            connection.query("INSERT INTO department (name) VALUES(?)", [answer.department], function (err, data) {
                console.log(data);
             
                console.table("department added")
                firstPrompt();
            });
        })
}

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "role",
            message: "What role would you like to add?"
        },
        {
            type: "number",
            name: "salary",
            message: "What is the salary of this role?"
        },
        {
            type: "number",
            name: "department_id",
            message: "enter department ID:"
        }
    ])
        .then(function (answer) {
            connection.query("INSERT INTO role (title, salary, department_id VALES(?, ?, ?)", [answer.title, answer.salary, answer.department_id], function (err, data) {
                console.table("role added")
                firstPrompt()
            });
        })
    }

    function updateRole() {
        inquirer.prompt([
            {
                type: "input",
                message: "which employee would you like to update? (use first name only)",
                name: "name"
            }, 
            {
                    type: "number",
                message: "enter the new role ID:",
                name: "role_id"
            }
        ])
        .then(function (answer) {
            connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [answer.role_id, answer.name], function (err, data) {
                console.log(data);
                if (err) throw err;
                console.table("role updated")
                firstPrompt()
            });
        })
    }

    firstPrompt()