import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({id, name, gender, species, origin, image, status, onClose}) { // props es un objeto
   return (
      <div className={style.card}>
         <button className = {style.boton3} onClick = {() => onClose(id)}>X</button>
            <Link className= {style.card-name} to={`/detail/${id}`}>
               <h2 className= {style.card-name}>{name}</h2>
            </Link>
            <img className={style.img} src={image} alt={name} /> 
      </div>
   );
}