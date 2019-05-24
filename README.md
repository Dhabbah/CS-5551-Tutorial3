# CS-5551-Tutorial3
# Due 02/15/19

# Students Information

| Name | Class ID | Email |
| :------: | :------: | :------: |
| Corey Doss    | 8 | cjdw94@mail.umkc.edu |
| Khalid Dhabbah| 6 | kmdk2t@mail.umkc.edu |

# Introduction
For this lab exercise 3, we will use API files again, and then we are going to search for a specific term, which is “**whole chicken**”. To do so, we should sign up in Nutritionix's and Voice RSS' sites, so that we could have our keys and use them in our project. The new goal is to create a login form, where no one should open the page of nutrition and VoiceRSS until the sign-in function is done. Besides, we are going to use bootstrap and jquery in our pages to get some great features like letting the site adjust in a variety of screens.

# Objectives
## 1- Installation
- Install bootstrap.
- Install jquery.
- Install popper.
## 2- Creation
- Create a home page for nutrition and VoiceRSS.
- Create the login & register page.

# Design/Implementation
**First**, in order to install all the requirements, we are going to use NPM. After creating a new project using Angualrjs CLI in WebStorm, we are going to use the Terminal section for writing NPM commands. To install bootstrap, jquery, and popper, we used the following commands.
```sh
$ npm install bootstrap
$ npm install jquery poppoer.js --save
```
Then we are going to open angular.json to add them there. After finding styles and scripts, we replace them by the following code.

```sh
   "styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "./node_modules/font-awesome/css/font-awesome.min.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.slim.min.js",
              "./node_modules/popper.js/dist/umd/popper.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ],
```
Now, we are done from the installation, and we can use bootstrap in our project and make some stylish.

**Second**, we created the components we needed for the project. 
To do so, we used the next commands in the Terminal. 
```sh
$ ng generate component login
$ ng generate component register
$ ng generate component home
or
$ ng g c login
$ ng g c register
$ ng g c home
```

**Third** To link our pages together, we have to create a routing module by using the following coming and do the configuration.
```sh
$ ng generate module app-routing --module app --flat
```
We import this routing module into our **app-module**.

**Fourth** we have created and import a guard auth to prevent any user from opening the home component unless if the user signed in.
```sh
$ ng g guard auth
```
Shown here our Routes in app-routing. The whole idea is that when the users open up the project, it will redirect to the login page. In addition, by using canActivate, we are using auth guard not to let the users surf the home component.
```sh
const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
];
```
# Input
## Login Page
![image1](https://raw.githubusercontent.com/Dhabbah/CS-5551-Tutorial3/master/img/login.JPG )
Users cannot sign in until they register. In addition, they are not able to access the home page and use the service until for sure they signed in.
## Register Page
![image1](https://raw.githubusercontent.com/Dhabbah/CS-5551-Tutorial3/master/img/register.JPG )
The information is stored in localstorage. Here is our function for storing the data.
```sh
store() {
    if (localStorage) {
      localStorage.setItem('FirstName', this.FirstName);
      localStorage.setItem('LastName', this.LastName);
      localStorage.setItem('UserName', this.UserName);
      localStorage.setItem('Password', this.Password);
      if ((this.FirstName != null) && (this.LastName != null) && (this.UserName != null) && (this.Password != null)) {
        alert('Registration Successful'); this.router.navigate(['/login']);  location.reload();
      } else {alert('Please complete the form'); }
    } else {alert('Your browser does not support local storage.'); }
  }
```
  - *if (localStorage)*: is to make sure that the browser support localstorage, and if not, it will show this message *Your browser does not support local storage*
 - *localStorage.setItem('FirstName', this.FirstName)*: We have two things here. First, we store whatever the value in *this.FirstName* into FirstName by using localStorage.setItem.
- *((this.FirstName != null)*: this is to make sure that the text is not empty.
## Home Page
![image1](https://raw.githubusercontent.com/Dhabbah/CS-5551-Tutorial3/master/img/hone.JPG )
Here is our home page where the users type the food name. Then the result will come as is shown in the output.
## Output
![image1](https://raw.githubusercontent.com/Dhabbah/CS-5551-Tutorial3/master/img/result.JPG )
When we click the submit button, we are calling the function *getNutrition()*
```sh
  result2 = 'http://api.voicerss.org/?key=74a35a8a6c0340c19fa923ba62d4d235&hl=en-us&src=' + this.food;
  getNutrition() {
    if ((this.food != null)) {
      this.GetHttp.get('https://api.nutritionix.com/v1_1/search/' +
        this.food + '?results=0:1&fields=*&appId=1c1ccd2c&appKey=cc82e01a3d45d384c04f28511568c367')
        .subscribe((result) => {
          this.result = result;
          console.log(this.result);
        });
    } else { alert('Please type the food name'); }
```
This function will allow us to get the data from two different resouce. The first one is from nutritionix, and the second is from voicerss API.


