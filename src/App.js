import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import { useEffect } from 'react';

function App() {

   const navigate = useNavigate()
   const [access, setAccess] = useState(false);
   const EMAIL = 'juan@gmail.com'
   const PASSWORD = 'juan1992'

   const login = (userData) => {
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   },[access, navigate]);


   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`) //TEMPLATE STRINGS CONCATENANDO EL PARAMETRO ID QUE VIENE DESDE EL USUARO EN SEARCHBAR.
      .then(({ data }) => { // Axios retorna un objeto gigante, hay que hacerle destructuring para quedarme con solo la data.
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         
         // } else if(characters.id === Number(id)){
         //    alert('Personaje repetido')
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }
   
   return (
      <>
         <div className='App'>
            <style>
               @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
            </style>
               <h1 className="neonText">Rick & Morty</h1>
            <Nav class = 'buscar' onSearch = {onSearch}/>
         </div>
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route className='boton1' path='/about' element={<About/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </>
   );
}

export default App;