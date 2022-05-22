--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--
Jeremy Chang, jeremsc2@uci.edu, jeremsc2
Alice Hua, huaac1@uci.edu, huaac1

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Either using a native device resource or backing up logged data
- 2/2 Following good principles of mobile design
- 2/2 Creating a compelling app
- 1/1 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
    96 hours (4 days)


3. What online resources did you consult when completing this assignment? (list specific URLs)
    https://ionicframework.com/docs/api/button
    https://ionicframework.com/docs/api/buttons
    https://stackoverflow.com/questions/54289078/display-time-clock-in-angular
    https://www.freakyjolly.com/ionic-datepicker-timepicker-example/
    https://ionicframework.com/docs/api/datetime#customizing-date-and-time-presentation
    https://www.freakyjolly.com/ionic-4-add-radio-lists-in-radio-group-example-and-tutorial/
    https://ionicframework.com/docs/api/alert


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
    We spoke to each other and also Slack


5. Is there anything special we need to know in order to run your code?
    We implemented local storage so you would need to install capacitor storage.

    There are 2 node_modules for some reason within our project. Changing the directory of them or getting rid of
    either one causes the code to error. We are not sure how this will impact the other people's ability to run our code.


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
    No. We designed this app for anybody to use.


7. Did you design your app specifically for iOS or Android, or both?
    Both.


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
    A person can log overnight sleep by selecting the "Log Overnight Sleep" button at the bottom of the app. They then
    can log the amount of sleep they had by inputting the beginning of when they slept and when they woke up which
    would then appear in the logs view box.


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
    A person can log sleepiness during the day by selecting the "Log Drowsy Moments" button at the bottom of the app.
    They then can log what level their sleepiness is at and what time they felt sleepy during the day, which would then
    appear in the logs view box.


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
    A person can view the logged data by looking at the home screen, which will show the most recently logged data
    they inputted. They can also select the "View All Logs" text button to view all the logs they have logged.


11. Which feature choose--using a native device resource, backing up logged data, or both?
    Backing up logged data.


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
    N/A


13. If you backed up logged data, where does it back up to?
    We backed up locally.

14. How does your app implement or follow principles of good mobile design?
    We made the format of the pages very easy to read. We have a initial view which is the home page that shows
    all there is about the app. There are exit buttons for each module and also an uh-oh button which is the back button.
    We also implemented error prevention such as when the dates logged don't make sense and most importantly, the
    app looks aesthetically pleasing.
