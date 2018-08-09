# Blog Task

A simple blog app that implements the core CRUD operations on both the users table and the posts table as well as a json endpoint for retrieving the posts data.

### Prerequisites

You'll find all the required packages and modules in the package.json files.
Ex:
```
 "dependencies": {
    "body-parser": "^1.18.3",
    "cors": "^2.8.4",
    "express": "^4.16.3",
    "mysql": "^2.16.0"
  }
```

### Installing

A step by step series of examples that tell you how to get a development env running

first install NodeJs by running the folowing command
```
sudo apt-get install nodejs

``` 

second install the dependencies by changing directory to your cloned folder and running the following command

```
npm install
```

Third install angular-cli


```
npm install -g angular-cli
```

## Server side understanding

In this app you'll find the folders architecture as the following:
```
.. controllers
.... postsRouts.js
.... usersRouts.js
.. .gitignore
.. dbconnection.js
.. index.js
.. package.json
```
Now let's discuss what's happening in the backend part.

1st the app main file is index.js, you'll find the required dependencies, requiring the routs files and uses express to land the main page (index.html) as well as navigating to the /user and /post POST and GET requests, and finally listening to the port that the server runs on.

2nd the controllers folder contains 2 files postsRouts.js and usersRouts.js, postsRouts.js contains the CRUD operations on the posts table as well as the JSON endpoint for retrieving the posts data in the tables while the usersRouts.js contains the CRUD operations of the users without any kind of endpoints as it will be so weird to provide users data to the public.

3rd the dbconnection which contains the database connection information.

4th the package.json which contains the server dependencies to be installed before running the server.

5th the .gitignore which contains the files that we don't need to run the app in another environment to make git ignore those files and folders.

Keep in mind that each step is well commented within the code to be more resonable and productive.

### Client side understanding

In the client side part you'll find the folders architecture as the following:
```
.. dist
.. e2e
.. node_modules
.. src
.... app
...... createpost
........ createpost.component.ts
........ createpost.component.html
...... globalposts
........ globalposts.component.ts
........ globalposts.component.html
...... login
........ login.component.ts
........ login.component.html
...... myposts
........ myposts.component.ts
........ myposts.component.html
...... app.component.html
...... app.component.ts
...... crud-requests.service.ts
.... assets
.... environments
.... index.html
.. .gitignore
.. package.json

```
Note that I've skipped some files to avoid destractions and for being ignorant a little bit about some of them , however this explaination will be to the point.

1st as we all know Angular is a single page application which means that all the above components are combined ( to be specific they might be combined and might be used as a replacement for each other) to deliver the single page app.

As we said in the server side part , .gitignore gives us the important and project dependent files and folders only , and also package.json contains the front end dependencies just like the server side part.

2nd for the dist folder it contains the built files for merging the Angular Interface with the Node Endpoints to enjoy the whole experience without the needing to start 2 separate servers.

Assets folder should contain any styling files to be attached to the project.

Now let's dive into the most important folder in the frontend part which is src, src contains the app compenent that combines every other component in it , we also have the crud-requests.service.ts which contains all the CRUD requests to both the users and posts as well as other declared variables that you'll find them with their comments.

Now we have a 4 main folders createpost, globalposts, login and myposts.

1- createpost :

This folder contains 4 files the .spec.ts files which is used in testing, .css file for styling and the .html file that contains our layout for the create, edit and share functions and the .ts file which sends orders to the previously mentioned crud-requests.service.ts file to fire the HTTP request, also just like the other files you'll find it well documented within the code.

2- globalposts :

Just like the createpost we have the first 2 files and then the html part as the layout for all the posts posted and stored in the database as well as the .ts file that is telling crud-requests.service.ts to fire the appropriate HTTP requests, also you'll find it documented.

3- login :

Besides the .spec.ts and .css files this file contains all the layout for the users data , creating a new user , selecting and logging in a user , updating his/her information and deleting the account , also the .ts file contains all the required functions and variables to switch between all the modes (log-in, Register, Edit, Delete) and to tell the crud-requests to make the needed CRUD operation on the users table, I don't need to mention that this one is documented as well in comments between the code.

4- myposts :

And finally this folder that do the same as globalposts except that it retrieves the user own posts so he/she can edit or delete them.

### Bad practicies

It's so weird that someone tells the bad practices, vulnerabilities and mistakes in their own project, however I find it super usefull to be back again to improve it and I'll only mention some of them.

1- A lot of static variables that could be handeled in a better way like creating Observables.

2- This app is vulnerable to any kind of attacks such as sql injection for example.

3- Object Oriented concepts could be used in a way better than this, It would have saved a lot of time.

4- Naming the variables and the functions should have a specific pattern.

## Best practicies

I'll put them in some words : indentation , No file exceeds 400 lines (they a lot less than this) , well commented.

Snapshots from the project can be found in the ERD and Snaps folder as well as the Database ERD.

## References

This part should be a way more than this, as It was my first time working with Node and Angular (Actually I just studied them for this project) so I had to go through a lot of researches, Tutorials, pdfs I'll just mention some of them.

1- NodeJs Tutorial from the net ninja https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp

2- Angular Tutorial from the net ninja https://www.youtube.com/watch?v=DwTNR3EBSJQ&list=PLw5h0DiJ-9PCw36zSMyfVRpO9gHwg-Lc9

3- Explaination for Google V8 engine https://medium.freecodecamp.org/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964

4- Expaination for the difference between angular and  angularjs https://stackoverflow.com/questions/46891098/difference-between-angularjs-and-angular

5- Observables Explaination 1- https://www.youtube.com/watch?v=Sol2uLolmUM

6- Observables Explaination 2 - https://angular.io/guide/observables

7- Express documentation - https://expressjs.com/en/4x/api.html 

8- Difference between typescript and javascript - https://www.geeksforgeeks.org/difference-between-typescript-and-javascript/

9- How to Host MEAN application on digitalocean (Unfortiantly this part isn't done yet) https://scotch.io/tutorials/how-to-host-a-mean-stack-app-on-digital-ocean#meanjs

