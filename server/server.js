const http = require('http') // To use the HTTP interfaces in Node.js
const fs = require('fs') // For interacting with the file system
const path = require('path') // For working with file and directory paths
const url = require('url') // For URL resolution and parsing

// To look up MIME types
// Full list of extensions can be found at
// https://www.iana.org/assignments/media-types/media-types.xhtml
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
}

// Create the HTTP server with http.createServer([options][, requestListener])
// Documentation: https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener
const server = http.createServer()

// Write the request handler function that is called every time a HTTP request is made against the server
server.on('request', (req, res) => {
  // Create a new URL object with URL constructor
  // Documentation: https://nodejs.org/docs/latest-v10.x/api/url.html#url_constructor_new_url_input_base
  const parsedUrl = new URL(req.url, 'https://node-http.glitch.me/')

  // Get path portion of the URL
  // Documentation: https://nodejs.org/docs/latest-v10.x/api/url.html#url_url_pathname
  let pathName = parsedUrl.pathname

  // Returns the extension of the path
  // Documentation: https://nodejs.org/api/path.html
  let ext = path.extname(pathName)

  // To handle URLs with trailing '/' by removing aforementioned '/'
  // then redirecting the user to that URL using the 'Location' header
  if (pathName !== '/' && pathName[pathName.length - 1] === '/') {
    res.writeHead(302, {'Location': pathName.slice(0, -1)})
    res.end()
    return
  }

  // If the request is for the root directory, return index.html
  // Otherwise, append '.html' to any other request without an extension
  if (pathName === '/') {
    ext = '.html'
    //pathName = '/index.html'
    pathName = '/App.js'
  } else if (!ext) {
    ext = '.html'
    pathName += ext
  }

  // Construct a valid file path so the relevant assets can be accessed
  const filePath = path.join(process.cwd(), '../client/src/', pathName)

  // Check if the requested asset exists on the server
  fs.exists(filePath, function (exists, err) {

    // If the asset does not exist, respond with a 404 Not Found
    if (!exists || !mimeTypes[ext]) {
      console.log('File does not exist: ' + pathName)
      res.writeHead(404, {'Content-Type': 'text/plain'})
      res.write('404 Not Found')
      res.end()
      return
    }

    // Otherwise, respond with a 200 OK status,
    // and add the correct content-type header
    res.writeHead(200, {'Content-Type': mimeTypes[ext]})

    // Read file from the computer and stream it to the response
    const fileStream = fs.createReadStream(filePath)
    fileStream.pipe(res)
  })
})

server.listen(5000)

console.log('Server listening on ' + process.env.PORT);
