import { useState } from "react";
import style from './Nav.module.css'

export default function SearchBar({onSearch}) {;
   const [id, setId] = useState(''); // id ESTADO LOCAL!!

   const handleChange = (event) => {
      setId(event.target.value)
      //event.target.value = '' //Aqui no se puede, porque estaria borrando el id metido por el usuario.
   };

   const handleSubmit = () =>{
      onSearch(id);
      setId('');
   };

   return (
      <div>
         <input className={style.bar} placeholder="1 to 826" type='search' onChange={handleChange} value={id}/> {/* Significa que cada vez que haya un cambio, se dispare la funcion onChange */}
         <button className={style.boton1} onClick={handleSubmit}><strong>Add</strong></button>
         {/*Luego de escrito un id por el usuario, se procede a enviar otro objeto que setee el id vacio de nuevo. El primer id de onSearch No se puede pisar antes.*/}
      </div>
   );
};
