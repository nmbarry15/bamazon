DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NULL,
    department_name VARCHAR(30) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT(10) NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kindle Paperwhite", "Electronics", 79.99, 5), 
        ("Bluetooth Speaker", "Electronics", 13.59, 10),
        ("Essential Oil Diffuser", "Beauty & Personal Care", 16.99, 4),
        ("Batiste Dry Shampoo, 3 Count", "Beauty & Personal Care", 14.80, 6),
        ("Rotating Hot Air Brush", "Beauty & Personal Care", 79.99, 2),
        ("Non-Stick Cheesecake Pan", "Kitchen", 10.99, 15),
        ("Cuisinart Cast Iron Casserole", "Kitchen", 89.99, 8),
        ("3-Tier Folding Cooling Rack", "Kitchen", 30.58, 5),
        ("TI-84 Plus CE BLueberry Graphing Calculator", "Electronics", 151.00, 6),
        ("Logitech Wireless Keyboard and Mouse Combo", "Electronics", 19.95, 12);




