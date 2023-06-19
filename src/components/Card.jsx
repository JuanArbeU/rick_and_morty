import './Card.css'
import { Link } from 'react-router-dom';
import './Nav.css'

export default function Card({id, name, gender, species, origin, image, status, onClose}) { // props es un objeto
   return (
      <div className='card'>
         <button className = 'boton3' onClick = {() => onClose(id)}>X</button>
            <Link className= 'card-name' to={`/detail/${id}`}>
               <h2 className= 'card-name'>{name}</h2>
            </Link>
         {/* <h3>{status}</h3>
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3>{origin}</h3> */}
         <img className='img' src={image} alt={name} /> 
      </div>
   );
}

// name: nombre.
// status: status.
// species: especie.
// gender: género.
// origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
// image: imagen.