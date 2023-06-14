import './Card.css'

export default function Card({id, name, gender, species, origin, image, status, onClose}) { // props es un objeto
   return (
      <div className='card'>
         <button onClick = {() => onClose(id)}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} /> 
      </div>
   );
}

// name: nombre.
// status: status.
// species: especie.
// gender: género.
// origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
// image: imagen.