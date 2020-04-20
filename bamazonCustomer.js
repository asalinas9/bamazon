var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    //removed password
    password: "",
    database: "bamazon"
});

//making cnnection with localhost
connection.connect(function (err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    displayItems();
});
//prompting start up questions
function displayItems() {

    inquirer.prompt({
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: ["Make a purchase", "Exit"]
    }).then(function (response) {
        switch (response.choice) {
            case "Make a purchase":
                inventoryItem();
                break;
            case "Exit":
                connection.end();
                console.log("You have exited the store. Please visit us again!")
                break;
        }
    })
}
// current stock inventory
function inventoryItem() {
    var query = "SELECT * FROM products";
    connection.query(query, function (error, response) {
        if (error) throw error;
        var divider = "\n-------------------------\n";
        var greeting = "\n" + "Here is what we have in stock" + "\n"
        console.log(greeting);
        //using Cli-Table to make the DB on terminal cleaner.
        var table = new Table({
            head: ["ID", "Product Name", "Department Name", "Price", "In Stock"]
        });
        for (var i = 0; i < response.length; i++) {
            table.push([
                response[i].item_id,
                response[i].product_name,
                response[i].department_name,
                '$' + response[i].price,
                response[i].stock_quantity
            ]);
        }
        console.log(table.toString() + "\n");
        startPurchase();
    })
}
//ask user to choose available item IDs.
function startPurchase() {
    inquirer
        .prompt([{
            type: "input",
            message: "\n" + "Please enter the ID of the product you would like to buy:",
            name: "itemId",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        {
            type: "input",
            message: "How many would you like to buy?",
            name: "units",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        {
            type: "confirm",
            message: "Is this correct?",
            name: "confirmation",
            default: true
        }
        ]).then(function (userResponse) {

            connection.query("SELECT * FROM products WHERE ?", {
                item_id: userResponse.itemId
            }, function (error, response) {
                console.log("\nYou have chosen to buy " + userResponse.units + " " + response[0].product_name + "(s).");
                if (userResponse.units > response[0].stock_quantity) {
                    console.log("We are sorry. item is currently out of stock")
                    displayItems();
                } else {
                    console.log("\nProcessing your order....\n");
                    var totalCost = userResponse.units * response[0].price;
                    var updateStock = response[0].stock_quantity - userResponse.units;
                    var update = "UPDATE products SET stock_quantity = " + updateStock + " WHERE item_id = " + userResponse.itemId;
                    connection.query(update, function (error, response) {
                        if (error) throw error
                        console.log("Transaction complete! The total cost for your purchase is: $" + totalCost + ".")
                        console.log("Please visit us again.")
                    })
                }
            })
        });
}