const http = require( 'http' )

const server = http.createServer( (req, res) => {
  res.end(`Received: ${req.url}\nHello World!`)
} )

server.listen( 8080, (err) => {
  if( err ) return console.error('Uh oh!', err)
  console.log('All aboard!')
} )
