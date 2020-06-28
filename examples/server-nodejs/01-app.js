// ********
// STEP 1: Open a terminal, navigate to this file, and type `node --version` to verify your
// node.js installation. These snippets were created with v12.18.1 in mind

// ********
// STEP 2: the 'http' package includes node.js's standard low level libraries for creating
// http servers and clients. To review more information about the http package, see
// `https://nodejs.org/docs/latest-v12.x/api/http.html`. Uncomment the require line below
// to import the 'http' package and type `node 01-app.js` to start the serve (ctrl-c to stop)
// const http = require('http')

const hostname = '127.0.0.1'
// ********
// STEP 3: The server can listen to any unassigned port. Change the port number below
// to something like 3001 and restart the node-js server (`node 01-app.js`).
// const port = 3000

const requestHandler = function (req, res) {
  // ********
  // STEP 4: A request handler (or request listener) function accepts a request parameter
  // which encapsulates data related to the request submitted by the client to the server.
  // Uncomment the console.log line below and restart the server to see the fields on the
  // request object.
  //   console.log('request object', Object.keys(req))

  // ********
  // STEP 5: The key data you'll be concerned with when creating a server is the request's
  // headers, http method, and url. As we saw in step 4, those fields can be accessed on
  // the request object. Uncomment the lines below and restart the server to print them.
  //   console.log('headers', req.headers)
  //   console.log('method', req.method)
  //   console.log('url', req.url)

  // ********
  // STEP 6: The response parameter encapsulates the data returned to the client. We can
  // return different status codes depending on request data. Let us return a 401 status
  // code for any request targeting the /unauthorized path by uncommenting the lines below.
  // For more information on http status codes, see https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
  //   if (req.url === '/unauthorized') {
  //     res.statusCode = 401
  //     res.setHeader('Content-Type', 'text/plain')
  //     res.end('unauthorized access')
  //     return
  //   }

  // ********
  // STEP 7: We can return data other than plain text in a response, as well. Uncomment
  // the lines below to set the content type to application/json and return an object
  // encoded as JSON
  //   if (req.url === '/json') {
  //     res.statusCode = 200
  //     res.setHeader('Content-Type', 'application/json')

  //     const someObject = {
  //       greeting: 'hello',
  //       target: {
  //         name: 'world',
  //         attitude: 'friendly',
  //         population: 7794468035,
  //       },
  //     }

  //     res.end(JSON.stringify(someObject))
  //     return
  //   }

  // ********
  // STEP 8: Note - any request that doesn't match the conditionals defined above drops through
  // to this general response (which we could make an error scenario if we desired)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
}

// ********
// STEP 9: Note - here we use the 'http' package's createServer function and pass in the request
// handler we defined previously
const server = http.createServer(requestHandler)

// ********
// STEP 10: Note - here we start the server listening on a specific port and hostname. It is
// common for a server to listen on the localhost, and then external DNS resolution can
// route packets to the machine by IP Address
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
