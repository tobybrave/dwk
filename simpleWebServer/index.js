const http = require("http")
const PORT = 4000

const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "application/json"})
  response.end("hello")
})

server.listen(PORT, () => console.log(`server is running at port ${PORT}`)) 
