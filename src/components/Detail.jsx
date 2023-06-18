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
            <div>
                <h2 className="texto">{character?.name}</h2>
                <h3 className='texto'>{character?.status}</h3>
                <h3 className='texto'>{character?.gender}</h3>
                <h3 className='texto'>{character?.species}</h3>
                <h3 className='texto'>{character?.name}</h3>
                <h3 className='texto'>{character.origin?.name}</h3>
                <img className='foto' src={character.image} alt={character.name} /> 
            </div>
        </>
    )
}
export default Detail;