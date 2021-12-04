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
                "View All Employees By Role",
                "Add employee",
                "Add Department",
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
}




function viewEmployees() {
    connection.query("SELECT * FROM employee" , function (err,data) {
        console.log(data);
        firstPrompt();
    })
}

function  viewDepartment() {
    connection.query("SELECT * FROM department" , function (err,data) {
        console.log(data);
        firstPrompt();
})
}

function  viewRole() {
    connection.query("SELECT * FROM role" , function (err,data) {
        console.log(data);
        firstPrompt();
})
}


function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message:"Please enter employee's first name:",
            name:"first_name"
        },
        {
            type: "input",
            message:"Please enter employee's last name:",
            name:"last_name"
        },
        {
            type: "input",
            message:"What is the employee's role?",
            name:"role_id"
        },
        {
            type: "input",
            message:"Who is the employees manager(managerId)?",
            name:"manager_id"
        },
    ])
    .then(function (answer) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function(err, data ) {
            console.log(data);
            if (err) throw err;
            console.table("info inserted");
            firstPrompt();
          });
        });
    }



function addDepartment() {

}

function addRole() {
}

function updateRole() {
}

firstPrompt()



