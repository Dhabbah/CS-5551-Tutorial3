# CS-5551-Tutorial4
# Students Information

| Name | Class ID | Email |
| :------: | :------: | :------: |
| Corey Doss    | 8 | cjdw94@mail.umkc.edu |
| Khalid Dhabbah| 6 | kmdk2t@mail.umkc.edu |

# Introduction
Lab exercise 4 aimed to create a mobile application using ionic. We had three parts to do. The first one was to create login and signup activities. Second, we used two services in our application. Finally, we had three unit test cases.

# Objectives

1- We made the home page as a login screen for using the app, and we created a new activity for the signup screen.
 * Users should be able to sign up. ( we used localStorage for storing the data.
 * We used the guard to control the routing, which means users cannot open the list activity in our project unless they signed in.
2- We signed in for Knowledge Graph Search API
3- we created new activities for our services. 

# Design/Implementation

```sh
$ ionic g Service auth
$ ionic g guard auth
$ ionic g page register
$ ionic g page service1
$ ionic g page service2
```

# Input
We used ionic Lab to test our project on multiple screen sizes.
![image1](https://github.com/Dhabbah/CS-5551-Tutorial4/blob/master/img/ionic-lab1.JPG?raw=true )
---
![image1](https://github.com/Dhabbah/CS-5551-Tutorial4/blob/master/img/ionic-lab1.1.JPG?raw=true)
## Register Page Input
![image1](https://github.com/Dhabbah/CS-5551-Tutorial4/blob/master/img/ionic-lab-r-input1.JPG?raw=true)
## Login Page Input
![image1](https://github.com/Dhabbah/CS-5551-Tutorial4/blob/master/img/ionic-lab-l-input.JPG?raw=true )

Once We signed in, we could access our services.
## Output of our Services.
![image1](https://github.com/Dhabbah/CS-5551-Tutorial4/blob/master/img/output.JPG)

## 1- Knowledge Graph Search service.
We used this service for typing a name such as Donald Trump, and then we could have something about him.
## Input
 ![image1](https://github.com/Dhabbah/CS-5551-Tutorial4/blob/master/img/service1.JPG?raw=true)
## Output
![image1](https://github.com/Dhabbah/CS-5551-Tutorial4/blob/master/img/service1-1.JPG?raw=true)

## 2- Weather service.
We used our previous service for getting information about the current weather statues.
## Input
 ![image1](https://github.com/Dhabbah/CS-5551-Tutorial4/blob/master/img/service2.JPG?raw=true)
## Output
![image1](https://github.com/Dhabbah/CS-5551-Tutorial4/blob/master/img/service2-1.JPG?raw=true)

# Conclusion
This was the end of this lab. We installed all the requirements. Then we had our project worked just fine. There were minor issues like spaces, and we are still working on them.
