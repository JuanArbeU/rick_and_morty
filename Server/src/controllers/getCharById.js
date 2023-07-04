const axios = require('axios') 
const URL =  ("https://rickandmortyapi.com/api/character/")

const getCharById = (req,res) =>{
    const {id} = req.params
    axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(({name,gender,species,origin,image,status}) => { 
        if(name){
            const character = {
                    id,
                    status,
                    name,
                    species,
                    origin,
                    image,
                    gender
                    };
                    return res.status(200).json({character})
                }
                return res.status(404).json({error: "Not found"})
            })
            .catch(error => res.status(500).send(error.message));
}

module.exports = {getCharById};


// const axios = require('axios') 

// const getCharById = (res, id) => { // res viene del servidor ya creado, es la respuesta del servidor.
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data) // response es la respuesta de la API, no el parametro res.
//     .then(({name,gender,species,origin,image,status}) => {  // Esto es destructuring de la respuesta.
//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin, // aqui no hay necesidad de origin.name, ya que desde el back se envia el objeto completo pero en el front es que se llama la propiedad name. No hay necesidad de hacerlo desde el back.
//             image,
//             status
//         }
//         return res
//                 .writeHead(200,{"Content-type": "application/json"})
//                 .end(JSON.stringify(character))
//     })
//     .catch(error => {
//         return res
//                 .writeHead(500,{"Content-type": "text/plain"})
//                 .end(error.message)
//     })
// }

// module.exports = {
//     getCharById
// };