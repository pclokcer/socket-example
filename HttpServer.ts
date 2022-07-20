import { Server } from 'net'

const server = new Server()

server.on('connection', (socket) => {
  console.log(socket.remoteAddress, socket.remoteFamily, socket.remotePort)

  socket.on('ready', () => {
    console.log("ready")
  })

  socket.on('data', (data: Buffer) => {
    console.log(data.toString())
    socket.write('HTTP/1.1 400 Bad Request\r\n')
    socket.write('Server: nginx/1.18.0\r\n')
    socket.write('Date: Wed, 17 Nov 2021 06:29:42 GMT\r\n')
    socket.write('Content-Type: application/json; charset=utf-8\r\n')
    socket.write('Content-Length: 20\r\n')
    socket.write('Connection: keep-alive\r\n')
    socket.write('X-Powered-By: PcLokcer\r\n')
    socket.write('Content-Language: en\r\n')
    socket.write('Access-Control-Allow-Origin: *\r\n')
    socket.write('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization\r\n')
    socket.write('ETag: W/"147-AE1GE7pDHcX19t+DUCFFQHhe+ZA"\r\n\r\n')
    socket.write('{"data":"working"}\r\n')
  })

  socket.on('close', (hadError) => {
    console.log('close', hadError)
  })

  socket.on('end', () => {
    console.log("done")
  })


  socket.on('error', (err) => {
    console.log('error', err)
  })

})

server.listen(5000, () => {
  console.log("Server is Running !")
})