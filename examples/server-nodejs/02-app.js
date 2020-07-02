const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

// ********
// STEP 1: The response parameter encapsulates the data returned to the client. We can
// return different status codes depending on request data. Let us create an unauthorized
// path that returns a 401 status code by uncommenting lines 13-18. Restart the server and
// navigate to localhost:3000/secure-page in your browser. For more info on http status
// codes, see https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
const requestHandler = function (req, res) {
  //   if (req.url === '/secure-page') {
  //     res.statusCode = 401
  //     res.setHeader('Content-Type', 'text/plain')
  //     res.end('unauthorized access')
  //     return
  //   }

  // ********
  // STEP 2: We can return data other than plain text in a response, as well. Uncomment
  // lines 24-39 to return a JSON encoded object when navigating to localhost:3000/json

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
  // STEP 3: Note - we can define any number of conditionals to handle requests
  // targeting any paths for which we want to serve a response. Any request that
  // doesn't match the conditionals defined above drops through to this general
  // response, which we could make a 404 not found scenario if we desired (and we
  // probably should).
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
}

const server = http.createServer(requestHandler)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

// *******
// STEP 4: That's it! Time to move on to 03-express.js
