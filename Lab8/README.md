# CS-5551-Tutorial8

# Students Information

| Name | Class ID | Email |
| :------: | :------: | :------: |
| Corey Doss    | 8 | cjdw94@mail.umkc.edu |
| Khalid Dhabbah| 6 | kmdk2t@mail.umkc.edu |

# Introduction
Lab Exercise-8 required our team to create our own web application with a frontend and backend for validating a JSON Web Token against login credentials (email address and password.)  We have a GUI implementation for this iteration, developed in Angular CLI.

# Objectives
* 1- Create backend web server to create and serve JSON Web Token.
* 2- Generate an Angular project to work within.
* 3- Corey and Khalid implemented frontend, backend, and middleware together.

# Design/Implementation

```sh
$ *** Created a new directory ***
$ npm install @angular/cli
$ ng new Lab8
$ cd Lab8
$ ng generate component login
$ ng generate component user-details
$ ng generate service auth
$ *** Created "server" directory in project's root directory ***
$ *** Created app.js and placed in "server" directory****
$ Added |const cors = require('cors);| and |const bodyParser = require('body-parser');| to app.js
$ Express application uses cors and body-parser in backend program
```

## Postman (For Testing Purposes)
![image1](https://github.com/Dhabbah/Lab8/blob/master/img/postman_test_1.PNG )
![image1](https://github.com/Dhabbah/Lab8/blob/master/img/postman_test_2.PNG )

Backend code added to app.js file for validation against email address and password.

![image1](https://github.com/Dhabbah/Lab8/blob/master/img/backend_1.PNG )

## Backend server running/listening
![image1](https://github.com/Dhabbah/Lab8/blob/master/img/backend_2.PNG )

## Frontend code for auth.service.ts within Angular CLI application
![image1](https://github.com/Dhabbah/Lab8/blob/master/img/frontend_1.PNG )

## Web application's frontend running
![image1](https://github.com/Dhabbah/Lab8/blob/master/img/frontend_2.PNG )

## Web application's frontend storing JSON Web Token in local storage and validating against email/password
![image1](https://github.com/Dhabbah/Lab8/blob/master/img/frontend_3.PNG )

# Conclusion
That concludes our implementation for Lab 8.  We were successfully able to implement the backend server logic, as well as the frontend GUI - we will continue to work on understanding and implementing post requests with the obtained bearer token to retrieve the body data from the backend server.
