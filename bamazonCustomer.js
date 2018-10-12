var mysql = require("mysql");
var inquirer = require("inquirer");

var dbInfo;

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllAvailProducts();
});

function queryAllAvailProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.log("ID |  PRODUCT NAME   | PRICE");
        for (var i = 0; i < res.length; i++) {
            if (i < 9) {
                console.log(" " + res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price);
            }else {
                console.log(res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price);
            }
        }
        console.log("-----------------------------------");
        dbInfo = res;
        //console.log(dbInfo);
        askToBuy();
    });
    connection.end();
};

function askToBuy() {
    inquirer.prompt([
        {
            message: "What is the ID of the product you would like to buy?",
            name: "itemID"
        }, {
            message: "How many units of the product would you like to buy?",
            name: "quantity"
        }
    ]).then(function (answers) {
        var i = answers.itemID - 1;
        if (dbInfo[i].stock_quantity < answers.quantity) {
            console.log("Insufficient quantity!");
            console.log("There are only " + dbInfo[i].stock_quantity + " of this product in stock.")
            askToBuy();
        } else {
            var cost = parseInt(answers.quantity) * dbInfo[i].price;
            cost = cost.toFixed(2);
            console.log("Your total: $" + cost);
            var newQuantity = dbInfo[i].stock_quantity - parseInt(answers.quantity);
            updateProduct(newQuantity, answers.itemID);
        }
    });
};

function updateProduct(newQuantity, id){
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: newQuantity
            },
            {
                item_id: id
            }
        ],
        function(err, res){
        }
    );
};