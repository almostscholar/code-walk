// ********
// STEP 1: Open a terminal, navigate to this file, and type `node --version` to verify your
// node.js installation. These snippets were created with v12.18.1 in mind

// ********
// STEP 2: the 'http' package includes node.js's standard low level libraries for creating
// http servers and clients. To review the docs, see: `https://nodejs.org/docs/latest-v12.x/api/http.html`.
// Uncomment line 11 below to import the package and type `node 01-app.js` from within
// the server-nodejs directory to start the server (ctrl-c or cmd-c to stop the server)

// const http = require('http')

// ********
// STEP 3: The server can listen to any unassigned port. Change the port number
// on line 17 below to something like 3001 and restart the server.
const hostname = '127.0.0.1'
const port = 3000

// ********
// STEP 4: A request "handler" or "listener" is a function that accepts a request parameter
// which encapsulates data related to the request submitted by the client to the server.
// Uncomment line 25 below and restart the server to see the fields on the
// request object.
const requestHandler = function (req, res) {
  //   console.log('request object', Object.keys(req))

  // ********
  // STEP 5: The key data you'll be concerned with when creating a server is the request's
  // headers, http method, and url. As we saw in step 4, those fields can be accessed on
  // the request object. Uncomment lines 31-33 below and restart the server.
  //   console.log('headers', req.headers)
  //   console.log('method', req.method)
  //   console.log('url', req.url)

  // ********
  // STEP 6: As a request comes in, we can "handle" that request by assigning a status code
  // on the response. Different status codes represent different things. Comment out lines
  // 40-41 and then uncomment lines 42-43 to return a Not Found response instead of OK.
  res.setHeader('Content-Type', 'text/plain')
  res.statusCode = 200
  res.end('Hello World')
  //   res.statusCode = 404
  //   res.end('Not Found')
}

// ********
// STEP 7: Note - here we use the 'http' package's createServer function and pass in the request
// handler we defined previously
const server = http.createServer(requestHandler)

// ********
// STEP 8: Note - here we start the server listening on a specific port and hostname. It is
// common for a server to listen on the localhost, and then external DNS resolution can
// route packets to the machine by IP Address
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

// ********
// STEP 9: All done here. Let's move on to file 02-app.js!
