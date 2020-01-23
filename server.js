const mysql = require("mysql");
const inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "soccer10",
    database: "management_system_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // run the start function after the connection is made to prompt the user
    start();
});

//start inquirer prompting
function start() {
    inquirer.prompt({
        name: "firstChoice",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Departments",
            "View All Roles",
            "View All Employees by Department",
            "View All EMployees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "Exit"
        ]
    })
        .then(function (answer) {
            switch (answer.firstChoice) {
                case "View All Employees":
                    viewAllEmployees();
                    break;

                case "View All Departments":
                    viewAllDepts();
                    break;

                case "View All Roles":
                    viewAllRoles();
                    break;

                case "View All Employees by Department":
                    viewEmpByDept();
                    break;

                case "View All Employees by Manager":
                    viewEmpByMan();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Remove Employee":
                    removeEmployee();
                    break;

                case "Update Employee Role":
                    updateEmpRole();
                    break;

                case "Update Employee Manager":
                    updateEmpManager();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        })
}

//functions for inquirer choices
function viewAllEmployees() {
    console.log("Showing all employees...\n");
    connection.query("SELECT * FROM employee ", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].first_name + " | " + res[i].last_name);
        }
        console.log("----------------");
    })
    connection.end();
}


// function viewEmpByDept()
// function viewEmpByMan()
// function addEmployee()
// function removeEmployee()
// function updateEmpRole()
// function updateEmpManager()

function viewAllDepts() {
    console.log("Showing all departments...\n");
    connection.query("SELECT * FROM department ", function (err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    });
};

function viewAllRoles() {
    console.log("Showing all roles...\n");
    connection.query("SELECT * FROM role ", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].title + " | " + res[i].salary + " | " + res[i].department_id);
        }
        console.log("----------------");
    })
    connection.end();
}
