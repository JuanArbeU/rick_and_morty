const http = require('http')
const datos  = require('./utils/data')

http.
createServer((request,response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    if(request.url.includes('/rickandmorty/character')){
        const div = request.url.split('/');
        const id = div[div.length-1];
        const characterId = parseInt(id)

        let character = datos.find((item) => item.id === characterId);
    if (character) {
      response.writeHead(200, { 'Content-type': 'application/json' });
      return response.end(JSON.stringify(character));
    } else {
      response.writeHead(404, { 'Content-type': 'text/plain' });
      return response.end('Character not found');
    }
        } else {
            response.writeHead(404, { 'Content-type': 'text/plain' });
            return response.end('Not found');
            }
})
.listen(3001,"127.0.0.1")