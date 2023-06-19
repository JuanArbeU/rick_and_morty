import './About.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import './Detail.css'


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
            <div className='detalle'>
                <ul className='lista'>
                    <li>
                        <h2 className="texto1">{character?.name}</h2>
                    </li>
                    <li>
                        <h3 className='texto'>STATUS | {character?.status}</h3>
                    </li>
                    <li>
                        <h3 className='texto'>GENDER | {character?.gender}</h3>
                    </li>
                    <li>
                        <h3 className='texto'>SPECIES | {character?.species}</h3>
                    </li>
                    <li>
                        <h3 className='texto'>ORIGIN | {character.origin?.name}</h3>
                    </li>
                </ul>
                    <img className='foto' src={character.image} alt={character.name} /> 
            </div>
        </>
    )
}
export default Detail;