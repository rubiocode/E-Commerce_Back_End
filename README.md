
<div align="center">

# E-Commerce Back End

URL of GitHub repository: https://github.com/rubiocode/E-Commerce_Back_End

</div>


## Table of Contents

* [Description](#description)
    * [User Story](#user-story)
    * [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Usage](#usage)
* [View](#view)
* [Built With](#built-with)
* [Credits](#credits)
* [License](#license)

## Description

The _E-Commerce Back End_ is an application where the user is able to build a database based on categories, products, and tags. The user is able to add, delete, and update categories, products, and tags as well as create tables using MySQL to keep track of the inventory.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```


## Installation

To start using this _E-Commerce Back End_ application you must follow these instructions:

* Fork and clone this repository and save it to your computer. For help how to fork and clone click [here](https://guides.github.com/activities/forking/) 

* Download Postman to test the APIs. To download Postman click [here](https://www.postman.com/downloads/)

* Open your terminal and make sure noje.js is installed. To download node.js click [here](https://nodejs.org/en/download/)

* Run command _npm i_ to install all the dependencies in this repository. If you wish to install one by one you will need to install: [sequelize](https://www.npmjs.com/package/sequelize), [MYSQL2](https://www.npmjs.com/package/mysql2) and [dotenv](https://www.npmjs.com/package/dotenv) by running the following commands:


`npm init`

`npm install mysql2`

`npm install sequelize`

`npm install dotenv`

## Usage

How to use this application: 

Run the following commands at the root of your project (cd into Developer folder) when prompted:

`mysql -u root -p`

Enter password when prompted

`source db/schema.sql`

`quit`

`npm run seed`

`npm start`

Last, if you are using this to create your own APIs refer to Postman to test the APIs. 

## View

Click [here](https://drive.google.com/file/d/1HU2A1kMk0stfZHmO97EQh6vaYJnUpHJl/view) to see the command line in action.

Click [here](https://drive.google.com/file/d/1XP2-USF3bz94PUKKyzsfkie7EpgevDS-/view) to see all APIs being tested in Postman

Here is a screenshot example of the GET ALL Categories request

![image](https://user-images.githubusercontent.com/78938193/127792911-7210b1ff-b352-4466-93b5-bf5fa4b85ea2.png)



## Built With

* [Node.js](https://nodejs.dev/learn/) - Node.js is an open-source, low-level, back-end JavaScript runtime platform that uses asynchronous programming and is a popular tool for almost any kind of project!. 

* [sequelize](https://www.npmjs.com/package/sequelize) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

* [MYSQL2](https://www.npmjs.com/package/mysql2) - MySQL2 project is a continuation of MySQL-Native. Protocol parser code was rewritten from scratch and api changed to match popular mysqljs/mysql.

*  [dotenv](https://www.npmjs.com/package/dotenv) - A library that allows for reading.env files instead of environment variables

## Credits
Starting files from © 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

## License
Copyright 2021 Rubidia Rubio

Licensed under the [MIT License](https://opensource.org/licenses/MIT)
