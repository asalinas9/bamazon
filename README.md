# bamazon

## Overview

Bamazon is a command line interface application that can be used to request and place real-time orders through a virtual storefront. Bamazon-CLI interacts with the Bamazon MySQL Database. It allows the users to view and purchase items from the inventory. With the use of Mysql, node js, and javacript, Bamazon allows the user to place orders and deplete stock from the current inventory.

## How it works

The app should prompt users with two messages.

* The first should ask them the ID of the product they would like to buy.
* The second message should ask how many units of the product they would like to buy.

Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

If not, the app should log a phrase like _Insufficient quantity!_, and then prevent the order from going through.
However, if your store does have enough of the product, you should fulfill the customer's order.

This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.

## Screenshot examples:

### MySQL Database:

![](img/mysql1.png)

![](img/mysqlDB2.png)


### node bamazon.js commands:

![](img/node1.png)

![](img/node2.png)

* After selecting certain number of units, the inventory will prompt updated stock inventory.

![](img/node3.png)

*_If_ user selects more than what its currently in stock, a message will populate advising item is currently not in stock.

![](img/node4.png)

* Once units are selected, will promp total cost for user

![](img/node5.png)

#### _Please refer to ID 1 & 2 (toilet paper, August Smartlock) for the example Screenshots_.

# Technology Used

1. MySql
2. Node js
3. Javascript
4. NPM Pachages (express, cli-table, inquirer)

