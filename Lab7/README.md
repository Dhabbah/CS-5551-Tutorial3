# lab7
# Students Information

| Name | Class ID | Email |
| :------: | :------: | :------: |
| Corey Doss    | 8 | cjdw94@mail.umkc.edu |
| Khalid Dhabbah| 6 | kmdk2t@mail.umkc.edu |

# Introduction
Lab Exercise-7 required our team to create our own CRUD application with REST API features for managing customer data.  We have a GUI implementation for this iteration, in contrast to Lab Exercise-6 from last week.

# Objectives
* 1- Create MongoDB Atlas account for remote database operations.
* 2- Generate an Angular project to work within.
* 3- Corey and Khalid implemented customer addition, edit, and delete functions together.

# Design/Implementation

```sh
$ *** Created a new directory ***
$ npm install @angular/cli
$ ng new Lab7
$ cd Lab7
$ ng generate component customer
$ ng generate component customer-create
$ ng generate component customer-detail
$ ng generate component customer-edit
$ ng generate service api
$ *** Created app.js and placed in project's root directory****
$ *** customer.js files placed in /models and /routes directories***
```

## MongoDB Atlas
![image1](https://github.com/Dhabbah/Lab7/blob/master/img/mongo_atlas_1.PNG?raw=true )
![image1](https://github.com/Dhabbah/Lab7/blob/master/img/mongo_atlas_2.PNG?raw=true )

Connection string required to be added to app.js (file given by instructors') for connection to MongoDB Atlas from Angular.

![image1](https://github.com/Dhabbah/Lab7/blob/master/img/mongo_atlas_3.PNG?raw=true )

## Customer Addition
![image1](https://github.com/Dhabbah/Lab7/blob/master/img/cust_add_1.PNG?raw=true )
![image1](https://github.com/Dhabbah/Lab7/blob/master/img/cust_add_2.PNG?raw=true )
![image1](https://github.com/Dhabbah/Lab7/blob/master/img/cust_add_3.PNG?raw=true )

## Customer Update
![image1](https://github.com/Dhabbah/Lab7/blob/master/img/cust_edit_1.PNG?raw=true )
![image1](https://github.com/Dhabbah/Lab7/blob/master/img/cust_edit_2.PNG?raw=true )
![image1](https://github.com/Dhabbah/Lab7/blob/master/img/cust_edit_3.PNG?raw=true )
![image1](https://github.com/Dhabbah/Lab7/blob/master/img/cust_edit_4.PNG?raw=true )
![image1](https://github.com/Dhabbah/Lab7/blob/master/img/cust_edit_5.PNG?raw=true )

## Customer List / Dashboard
![image1](https://github.com/Dhabbah/Lab7/blob/master/img/cust_dash.PNG?raw=true )

## Customer Removal
![image1](https://github.com/Dhabbah/Lab7/blob/master/img/cust_delete_1.PNG?raw=true )
![image1](https://github.com/Dhabbah/Lab7/blob/master/img/cust_delete_2.PNG?raw=true )
![image1](https://github.com/Dhabbah/Lab7/blob/master/img/cust_delete_3.PNG?raw=true )

# Conclusion
That concludes our implementation for Lab 7.  We successfully met all requirements, and we will continue to learn and grow with Angular, MongoDB Atlas, and CRUD applications with REST API features.
