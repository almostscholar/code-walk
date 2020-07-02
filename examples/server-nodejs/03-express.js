// ********
// STEP 1: If you have Node.js, you should have NPM already installed (the node
// package manager). If not, [install it now](https://www.npmjs.com/get-npm). Then
// initialize a package.json with `npm init` and install express with
// `npm install express --save`

// ********
// STEP 2: As with the 'http' package in the Node.js standard library, we must
// import 'express' with a require statement before being able to use it.
// Uncomment the require line below and then `node 02-express.js` to run it.
// const express = require('express')
const fs = require('fs')

// ********
// STEP 3: Note - although the require imports the package (which is a function),
// we must call the function to create an instance of an express server.
const app = express()

// ********
// STEP 4: Note - as with 'http' from the standard library, we can define whatever
// port we want to run the server on
const port = 3000

// ********
// STEP 5: Note - unlike the standard library's 'http' package, we define request
// handlers for specific paths when using 'express' instead of one large request
// handler for all requests. The framework takes care of the rest.
app.get('/', (req, res) => res.send('Hello World!'))

// ********
// STEP 6: Let's define a request handler for a get request to a new path. Uncomment
// the lines below and re-run the application. The 'fs' library provides access to
// the filesystem. The .json helper function returns json strings with the correct
// content-type header.
// app.get('/minions', (req, res) => {
//   fs.readFile('./data/minions.json', 'utf8', (err, data) => {
//     if (err) {
//       throw err
//     }

//     res.status(200).json(JSON.parse(data))
//   })
// })

// ********
// STEP 7: Note - this is how the express server is started. Notice backticks are being
// used here to create a template string -- this is a javascript feature.
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
