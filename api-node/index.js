const http = require('http')
const PORT = 8080

const server = http.createServer((request,response)=>{

    const status = 200
    const MimeType = {'Content-type':'text/html'}


    response.writeHead(status, MimeType)
    response.write('<body> <h1> Hola DEVF desde node </h1> </body>')
    response.end()


})
console.log('Servidor corriendo en el puerto', PORT)
server.listen(PORT)


//extensiones o formatos => mimeTypes
//.mp3,.docx.xls wma ppt
//.css, js, html
