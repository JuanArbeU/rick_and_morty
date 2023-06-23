import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import style from './Detail.module.css'


const Detail = () => {
    const {id} = useParams()

    let [character, setCharacter] = useState({})

    useEffect(()=>{
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);

    return(
        <>
            <div className={style.detalle}>
                <ul className={style.lista}>
                    <li>
                        <h2 className={style.texto1}>{character?.name}</h2>
                    </li>
                    <li>
                        <h3 className={style.texto}>STATUS | {character?.status}</h3>
                    </li>
                    <li>
                        <h3 className={style.texto}>GENDER | {character?.gender}</h3>
                    </li>
                    <li>
                        <h3 className={style.texto}>SPECIES | {character?.species}</h3>
                    </li>
                    <li>
                        <h3 className={style.texto}>ORIGIN | {character.origin?.name}</h3>
                    </li>
                </ul>
                    <img className={style.foto} src={character.image} alt={character.name} /> 
            </div>
        </>
    )
}
export default Detail;