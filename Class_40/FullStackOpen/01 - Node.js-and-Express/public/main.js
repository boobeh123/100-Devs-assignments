/**************************************************************
* Node.js and Express
***************************************************************/
/*
We will be implementing functionality on the server-side using NodeJS, 
which is a JavaScript runtime based on Google's Chrome V8 JavaScript engine.

Browsers don't yet support the newest features of JavaScript, 
and that is why the code running in the browser 
must be transpiled with e.g. babel. 

The situation with JavaScript running in the backend is different. 
The newest version of Node supports a large majority 
of the latest features of JavaScript, 
so we can use the latest features without having to transpile our code.

The `npm init` command generates a package.json file 
at the root of the project that contains information about the project.

The file defines the entry point of the application is the index.js file.

It's customary for npm projects to execute such tasks as npm scripts.

By default the package.json file also defines 
another commonly used npm script called npm test. 
This project does not yet have a testing library. 
*/
/**************************************************************
* Node.js and Express
***************************************************************/




/**************************************************************
* Simple web server
***************************************************************/
/*
If the port 3000 is already in use by some other application, 
then starting the server will result in the following error message:
`Error: listen EADDRINUSE :::3000`

There are two solutions for this error:
    * Shut down the application using the port 3000 
    * Use a different port for this application.

Code that runs in the browser uses ES6 modules. 
Modules are defined with an export and taken into use with an import.

Node.js uses CommonJS modules & Node supports the use of ES6 modules.
CommonJS modules function almost exactly like ES6 modules.

An event handler is registered to the server 
that is called every time an HTTP request is made to the server's address.

`Simple Web Server Example:`
```
The first line of code imports Node's built-in (web server) http module. 
The second line of code uses the createServer method from the http module to create a new web server. 
The third line of code responds to the request with the status code 200, with the Content-Type header set to text/plain, 
The fourth line of code is the content of the site to be returned (set to Hello World).
The last rows of code allows http server to listen to HTTP requests sent to the port 3000
``` 

`Transforming raw data into JSON`
```
The primary purpose of the backend server in this course 
is to offer raw data in the JSON format to the frontend. 

The application/json value in the Content-Type header 
informs the receiver that the data is in the JSON format. 
The raw data gets transformed into JSON with the JSON.stringify() method.
```
*/
// Simple Web Server Example
const http = require('http');
const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello World')
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

// Transforming raw data into JSON 
const http = require('http');
let inventory = {
    id: 001,
    name: "Disinfectant Spray",
    quantity: 010,
    stock: true
}
const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(inventory));
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
/**************************************************************
* Simple web server
***************************************************************/




/**************************************************************
* Express
***************************************************************/
/*
Many libraries have been developed 
to ease server side development with Node, 
by offering a more pleasing interface 
to work with the built-in http module. 

These libraries aim to provide a better abstraction for general use cases 
we usually require to build a backend server. 
By far the most popular library intended for this purpose is express.

`Transitive dependencies` are the dependencies of all of its dependencies.
`Semantic versioning` is the versioning model used in npm.

The caret in the front of ^4.17.2 means that 
if and when the dependencies of a project are updated, 
the version of express that is installed will be at least 4.17.2. 

4 is the `major number` in 4.17.2
17 is the `minor number` in 4.17.2
2 is the `patch number` in 4.17.2

The installed version of express can also be one that has a larger patch number, 
or a larger minor number. 
The major version of the library indicated by the first major number must be the same.

If the major number of a dependency does not change, 
then the newer versions should be backwards compatible. 

This means that if our application happened to use 
version 4.99.175 of express in the future, 
then all the code implemented in this part would still have to work 
without making changes to the code. 

In contrast, 
the future 5.0.0. version of express may contain changes 
that would cause our application to no longer work.
*/
/**************************************************************
* Express
***************************************************************/




/**************************************************************
* Web and express
***************************************************************/
/*
`Simple Web Server Using Express Example`
```
The first two lines of code imports express, which is a function
used to create an express application stored in the app variable.

The next three lines of code is the first route to the application,
that defines an event handler(*) that handles HTTP GET requests made 
to the application's / root.

The next three lines of code is the second route to the application,
that defines an event handler(*) that handles HTTP GET requests made 
to the inventory path of the application.

(*) The event handler function accepts two parameters. 
(*) The first request parameter contains all of the information 
    of the HTTP request. 
(*) The second response parameter is used to define how the request 
    is responded to.
```

The request is responded to by using the send method of the response object. 
Calling the method makes the server respond to the HTTP request 
by sending a response passed to the send method. 
Since the parameter is a string/html,
Express automatically sets the value of the Content-Type header 
to be text/html & the status code of the response defaults to 200.

The request is responded to by using the json method of the response object. 
Calling the method will send the inventory array that was passed to it 
as a JSON formatted string. 
Since the parameter is a JSON string,
Express automatically sets the value of the Content-Type header 
to be application/json.

In the previous Simple Web Server Example, 
we had to transform raw data into a JSON format using the JSON.stringify method:

With express, this is no longer required.
The transformation happens automatically.

It's worth noting that JSON is a string, 
and not a JavaScript object like the value assigned to inventory.
*/

// Simple Web Server using Express
const express = require('express');
const app = express();
let inventory = [/*...*/]
app.get('/', (request, response) => {
    response.send('<h2>Hello World</h2>');
})
app.get('/api/inventory', (request, response) => {
    response.json(inventory);
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
/**************************************************************
* Web and express
***************************************************************/




/**************************************************************
* Nodemon
***************************************************************/
/*
Nodemon will watch the files in the directory in which nodemon was started, 
if any files change, nodemon will automatically restart your node application.

If you use the wrong command and the nodemon dependency was added 
under "dependencies" instead of "devDependencies", 
then manually change the contents of package.json.

By development dependencies, we are referring to tools 
that are needed only during the development of the application.
These development dependencies are not needed 
when the application is run in production mode on the production server.
*/
/**************************************************************
* Nodemon
***************************************************************/




/**************************************************************
* REST (Representational State Transfer)
***************************************************************/
/*
REST is an architectural style meant for building scalable web applications.
REST was introduced in 2000 in Roy Fielding's dissertation.
The original definition of REST is not limited to web applications.

Resources in RESTful thinking are singular things,
like `inventory` in the case of our application.
Every resource has an associated URL which is the resource's unique address.

One convention is to create the unique address for resources by combining 
the name of the resource type with the resource's unique identifier.

The resource type will be `inventory`
The resource's identifier will be 10
The unique address would be www.example.com/api/inventory/10.
The URL for the entire collection of all inventory resources is www.example.com/api/inventory

We can execute different operations on resources. 
The operation to be executed is defined by the HTTP verb:

URL             VERB            FUNCTIONALITY
-----------------------------------------------------------------------------------------
inventories/10  GET             Fetches a single resource  
-----------------------------------------------------------------------------------------
inventories     GET             Fetches all resources in the collection
-----------------------------------------------------------------------------------------
inventories     POST            Creates a new resource based on the request data
-----------------------------------------------------------------------------------------
inventories/10  DELETE          Removes the identified resource
-----------------------------------------------------------------------------------------
inventories/10  PUT             Replaces the entire identified resource with the request data
-----------------------------------------------------------------------------------------
inventories/10  PATCH           Replaces a part of the identified resource with the request data
-----------------------------------------------------------------------------------------

This is how we roughly define what REST refers to as a uniform interface, 
which means a consistent way of defining interfaces 
that makes it possible for systems to co-operate.
*/
/**************************************************************
* REST (Representational State Transfer)
***************************************************************/




/**************************************************************
* Fetching a single resource
***************************************************************/
/*
Let's expand our application so that it offers a REST interface 
for operating on individual items. 

The unique address we will use for an individual item 
is of the form `inventory/10`, 
where the number at the end refers to the item's unique id number.(identifier?)

Parameters can be defined for routes in express by using the colon syntax:

app.get('/api/inventory/:id', ...) handles all HTTP GET requests 
that are of the form /api/inventory/SOMETHING 
(SOMETHING is an arbitrary string)

The array-method find() is used to find the item with an id 
that matches the parameter. 

The id parameter from the route is passed to our application 
but the find method does not find a matching item.

We do not find a match due to the id variable containing a string '1' &
the item.id variable contains a number 1. 
The issue is fixed by changing the id parameter from a string into a number.

If we search for an item with an id that does not exist, 
the server responds with status code 200, which means 'response succeeded.'
The reason for this behavior is that the item variable is set to undefined if no matching note is found. 
If no item is found, 
the server should respond with the status code 404 not found instead of 200.

The if-condition leverages the fact that all JavaScript objects are truthy, 
meaning that they evaluate to true in a comparison operation. 
Undefined is falsy meaning that it will evaluate to false.
 
We do not actually need to display anything in the browser because REST APIs 
are interfaces that are intended for programmatic use, 
and the error status code is all that is needed.
*/
// Define parameters for routes in express with : syntax
app.get('/api/inventory/:id', (request, response) => {}

// The id parameter can be accessed through the request object
const id = request.params.id;

// Searching an item with a non-existant id to serve a 404 instead of 200
if (item) {
    response.json(item);
} else {
    response.status(404).end();
}
/**************************************************************
* Fetching a single resource
***************************************************************/




/**************************************************************
* Deleting resources
***************************************************************/
/*

*/
/**************************************************************
* Deleting resources
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




/**************************************************************
*
***************************************************************/
/*

*/
/**************************************************************
*
***************************************************************/




