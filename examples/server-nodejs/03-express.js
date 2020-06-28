const express = require('express')
const fs = require('fs')

const app = express()
// ********
// STEP 1: To handle POST data, express requires us to configure a body-parser.
// In some versions, a separate body-parser must be installed. But for >= v4.16.0
// we can use express's built in body parser. Uncomment the line below to do so.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// *********
// STEP 2: Note - express.json() and express.urlencoded() return middleware. Other
//  middlewarecan be used if desired, as well. Middleware is just a handler function
// configured with `app.use` which will be called on every request before passing
// the request along to the next function

const port = 3000
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/minions', (req, res) => {
  fs.readFile('./data/minions.json', 'utf8', (err, data) => {
    if (err) {
      throw err
    }

    res.status(200).json(JSON.parse(data))
  })
})

// *******
// STEP 3: We can create a POST handler by calling the post method on the express
// app (this is instead of calling 'get', there are similar functions for 'put'
// and 'delete' operations). Uncomment the lines below to enable minion creation
// functionality! You can run this server with `node 03-express.js` but we will
// need a better client than a browser to use it.
// app.post('/minion', (req, res) => {
//   const body = req.body

//   if (!body.name) {
//     console.warn('bad request')
//     res.status(403).send('error: name is required')
//   }

//   fs.readFile('./data/minions.json', 'utf8', (err, data) => {
//     if (err) {
//       throw err
//     }

//     let dataJSON = JSON.parse(data)

//     const id = dataJSON.length + 1

//     const minion = {
//       type: 'goblin',
//       name: body.name,
//       id: id,
//       health: 100,
//       attack: 2,
//       defense: 3,
//     }

//     dataJSON.push(minion)

//     fs.writeFile('./data/minions.json', JSON.stringify(dataJSON), (err) => {
//       if (err) {
//         throw err
//       }

//       res.status(201).end()
//     })
//   })
// })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
