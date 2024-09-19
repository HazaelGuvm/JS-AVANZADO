const http  = require('http')
const url   = require('url')
const PORT = 8080

const server = http.createServer((request,response) =>{

    const urlObject = url.parse(request.url)
    const path = urlObject.path

    let status = 0
    let mimeType = {}
    let responseObject = {}


    if (path === '/'){
        status = 200
        mimeType = {'Content-type':'application/json'}
        responseObject = {"message":"hola desde el index"}

    }else if(path === '/patitos'){
        status = 200
        mimeType = {'Content-type':'application/json'}
        responseObject = {data :[{name: "donald"},{name:"lucas"}]}

    }else if(path === '/pokemons'){
        status = 404
        mimeType = {'Content-type':'text/plain'}
        responseObject = 'not found'

    }else if(path === '/admin'){
        status = 401
        mimeType = {'Content-type':'text/html'}
        responseObject = {}

    }else{
        //reto :404
    }

                const stringObject = JSON.stringify(responseObject)
                response.writeHead(status,mimeType)
                response.write(stringObject)
                response.end()

})

server.listen(8080)
console.log('servidor iniciado...',PORT)