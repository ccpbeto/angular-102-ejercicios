// librería http, que contiene por default NodeJS
// nos permite poder exponer un servidor
const http = require('http')
const PORT = 3000

// server. constante que contiene un servidor
const server = http.createServer(async (request, response) => {

    // Servidor consulte un servicio externo (API)
    response.writeHead(200, { "Content-Type": "application/json" })

    try {
        // console.log('1. Obteniendo Data...')
        const responseFetch = await fetch("https://jzonplaceholder.typicode.com/todos")
        // console.log(responseFetch.body)
        const json = await responseFetch.json()

        // console.log('Presentando Data')

        response.end(JSON.stringify(json,null,'\t'))


    } catch (error) {
        console.error(error)
        response.writeHead(500, { "Content-Type": "text/plain" })
        response.end("Error")
    }

})

// Levantar el servidor, exponer el servidor puerto 3000
server.listen(PORT, () => {
    console.log(`Servidor Levantado en puerto: ${PORT}`)
})