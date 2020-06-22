# CS-5551-Tutorial5
# Students Information

| Name | Class ID | Email |
| :------: | :------: | :------: |
| Corey Doss    | 8 | cjdw94@mail.umkc.edu |
| Khalid Dhabbah| 6 | kmdk2t@mail.umkc.edu |

# Introduction
Lab Exercise-5 required our team to create our own Firebase account and to enable authentication via email/password.  We were also directed to use at least one Cordova plugin related to our project.  Lastly, we were to save dynamic results to Firebase's Real Time Database to show that our app can communicate back and forth with the database.  The overall project should be deployable to Web/Android/Ionic.

# Objectives
* 1- Both Corey and Khalid were able to create Firebase accounts and enable authentication using email and password.
* 2- Khalid was able to implement the text-to-speech Cordova plugin successfully.  Corey has attempted several other plugins, but unfortunately has been unable to successfully implement any as of the time of writing.
* 3- Successful registration followed by logging in leads to a time/date stamp being stored in Firebase that displays on the web app's List page (where services from Lab 4 are listed.)
* 4- On an Android build of the app, with volume turned on and turned up, you can hear an audio clip that says "Welcome to Lab 5"
* 5- Update functionality was implemented by Khalid so that first name and last name can be modified and stored in Firebase's Real Time Database for future retrieval.
# Design/Implementation

```sh
$ ionic g page update
```

## Login Page Input
![image1](https://github.com/Dhabbah/Lab5/blob/master/img/login1.PNG?raw=true )

## Firebase Authentication Successful
![image1](https://github.com/Dhabbah/Lab5/blob/master/img/authentication1.PNG?raw=true )

Once we have signed in, on Android emulation, we hear "Welcome to Lab 5"
Also notice the new "Update" button that was not present in Lab 4
![image1](https://github.com/Dhabbah/Lab5/blob/master/img/android_emu.png )

## Update Feature
![image1](https://github.com/Dhabbah/Lab5/blob/master/img/login3.PNG?raw=true )

## Database Storage (Update)
First image is pre-update, second image is post-update
## Input
![image1](https://github.com/Dhabbah/Lab5/blob/master/img/database_storage1.PNG?raw=true )
## Output
![image1](https://github.com/Dhabbah/Lab5/blob/master/img/update.PNG?raw=true )

# Conclusion
That concludes our implementation for Lab 5.  We successfully met all requirements, and we will continue to learn and grow with Angular/Ionic.
