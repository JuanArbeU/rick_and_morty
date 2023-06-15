import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`) //TEMPLATE STRINGS CONCATENANDO EL PARAMETRO ID QUE VIENE DESDE EL USUARO EN SEARCHBAR.
      .then(({ data }) => { // Axios retorna un objeto gigante, hay que hacerle destructuring para quedarme con solo la data.
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);

         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   /* const onSearch = () => {
      setCharacters([...characters, example]) // la consigna dice que este personaje se debe agregar cada vez que se ejecute la funcion. Si no hacemos la copia de lo que antes habia (...characters) este estaso se va a pisar cada vez que ejecutemos la funcion.
   } */
   
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }
   

   return (
      <div className='App'>
         <div class="container">
            <h1 class="neonText">
            Bienvenido!
            </h1>
      </div>
         <Nav onSearch = {onSearch}/> {/* EN LLAVES PORQUE ES CODIGO JS */}
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
