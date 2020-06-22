# Students Information

| Name | Class ID | Email |
| :------: | :------: | :------: |
| Corey Doss    | 8 | cjdw94@mail.umkc.edu |
| Khalid Dhabbah| 6 | kmdk2t@mail.umkc.edu |

# Introduction
Lab Exercise-10 required our team to create an account in Heroku and use our lab exercise-9 to be deployed to it. Because this lab is about deploying, each one of us did it separately. then we compared our steps and discuss the issues we faced.

# Objectives
* 1- Create a Heroku account.
* 2- Deploy our lab exercise-9 to Heroku.
* 3- Corey and Khalid deployed the lab together to two separate accounts.

# Design/Implementation

```sh
$ *** Created a new directory and copy lab exercise-9 to it***
$ *** Created a package.json file, and add the node and npm versions to it****
$ npm init
```

## Package.json file
![image1](https://raw.githubusercontent.com/Dhabbah/lab10/master/Wiki-img/1.JPG )

Then to avoid not having the page displayed while there are no errors, we changed the port number in the index.js file 
## Index.js file
![image1](https://raw.githubusercontent.com/Dhabbah/lab10/master/Wiki-img/2.JPG )

```sh
$ *** In order to log in to Heroku through command line****
$ npm i -g heroku
$ *** login to Heroku****
$ heroku login
```
After Creating an account and a new project in Heroku, we deployed the lab9 using the command line.
```sh
$ *** Initialize a git repository in our project directory ***
$ git init
$ heroku git:remote -a lab9-lab10
$ *** [where lab9-lab10 is the name of the app in Heroku] ****
$ *** commit and push the project ****
$ git add .
$ git commit -am "Deploy Lab9"
$ git push heroku master

```
## Home/Dashboard Page
![image1](https://raw.githubusercontent.com/Dhabbah/lab10/master/Wiki-img/3.JPG )

## Registration Page
![image1](https://raw.githubusercontent.com/Dhabbah/lab10/master/Wiki-img/4.JPG )

## Logging In
![image1](https://raw.githubusercontent.com/Dhabbah/lab10/master/Wiki-img/5.JPG )

## Login Page Displaying Stored/Cookie Info After Successful Authentication
![image1](https://raw.githubusercontent.com/Dhabbah/lab10/master/Wiki-img/6.JPG )

Deployed application links:
- 1- Khalid Dhabbah(https://lab9-lab10.herokuapp.com/)
- 2- Corey Doss(https://cjdtutorial10.herokuapp.com/)

# Conclusion
That concludes our implementation for Lab 10.  We were successfully able to deploy the lab exercise-9 to Heroku - we will continue to work on understanding and learning Heroku for future projects.
