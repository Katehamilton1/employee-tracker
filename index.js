const mysql = require("mysql");
const inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    // MySQL username,
    user: "root@localhost",
    // MySQL password
    password: "hamilton",
    database: "employee-tracker",
});
connection.connect(function (err) {
    if (err) throw err;
});

function firstPrompt() {

    inquirer.prompt({
        type: "list",
        name: "action",
        message: "what would you like to do?",
        choices:
            ["View all employees",
                "View all employees by department",
                "View All Employees By Role",
                "Add employee",
                "Add Department",
                "Add role",
                "Update employee role",

                "End"]
    })
}
.then(function ({ answer }) {
    switch (answer.action) {
        // Variety of cases that fire a function depending on the selection from prompt
        case "View all employees":
            viewEmployees();
            break;

        case "View all employees by department":
            viewDepartment();
            break;

        case "View All Employees By Role":
            viewRole();
            break;

        case "Add Employee":
            addEmployee();
            break;

        case "Add Department":
            addDepartment();
            break;


        case "Add Role":
            addRole();
            break;


        case "Update Employee Role":
            updateRole();
            break;


        case "End":
            connection.end();
            break;
    }
})



function viewEmployees() {
}



function  viewDepartment() {
}



function addEmployee() {
}

function addRole() {
}

function updateRole() {
}

firstPrompt()



