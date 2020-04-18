DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
    item_id INT(11)
    AUTO_INCREMENT NOT NULL,
product_name VARCHAR
    (50) NOT NULL,
department_name VARCHAR
    (30) NOT NULL,
price DECIMAL
    (10, 2) NOT NULL,
stock_quantity INT
    (11) NOT NULL,
PRIMARY KEY
    (item_id)
);

    SELECT *
    FROM products;

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Toilet Paper 32 count", "Paper & Plastic", 18.90, 30),
        ("August Smart Lock", "Smart Home", 199.00, 20),
        ("Ecobee4 Smart Thermostat", "Smart Home", 179.00, 20),
        ("Electric Razor", "Hair Care", 49.99, 40),
        ("Dove Shampoo", "Cosmetics", 5.99, 15),
        ("Dove Conditioner", "Cosmetics", 5.99, 10),
        ("Nivea Shave Gel", "Hair Care", 9.20, 7),
        ("Keurig Coffee Sampler Pack 40 count", "Groceries", 29.90, 20),
        ("Cheerios Cereal", "Groceries", 5.90, 20),
        ("Coffe-Mate Creamer", "Groceries", 2.90, 30)