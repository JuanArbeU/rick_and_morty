const axios = require('axios') 

const getCharById = (res, id) => { // res viene del servidor ya creado, es la respuesta del servidor.
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data) // response es la respuesta de la API, no el parametro res.
    .then(({name,gender,species,origin,image,status}) => {  // Esto es destructuring de la respuesta.
        const character = {
            id,
            name,
            gender,
            species,
            origin, // aqui no hay necesidad de origin.name, ya que desde el back se envia el objeto completo pero en el front es que se llama la propiedad name. No hay necesidad de hacerlo desde el back.
            image,
            status
        }
        return res
                .writeHead(200,{"Content-type": "application/json"})
                .end(JSON.stringify(character))
    })
    .catch(error => {
        return res
                .writeHead(500,{"Content-type": "text/plain"})
                .end(error.message)
    })
}

module.exports = {
    getCharById
};