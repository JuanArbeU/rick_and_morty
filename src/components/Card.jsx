import './Card.css'

export default function Card({id, name, gender, species, origin, image, status, onClose}) { // props es un objeto
   return (
      <div className='card'>
         <button onClick = {() => onClose(id)}>X</button>
         <h2>{name}</h2>
         <h3>{status}</h3>
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3>{origin}</h3>
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