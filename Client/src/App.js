import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate} from 'react-router-dom';


function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const [characters, setCharacters] = useState([]);
   
   const login = (userData) => { 
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)  // Le estamos enviando info al back
      .then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }
    
   useEffect(() => {
      !access && navigate('/');
   },[access, navigate]);
   
   
   
   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`) //TEMPLATE STRINGS CONCATENANDO EL PARAMETRO ID QUE VIENE DESDE EL USUARO EN SEARCHBAR.
      .then(({ data }) => { // Axios retorna un objeto gigante, hay que hacerle destructuring para quedarme con solo la data.
         console.log(data.character);
         if (data.character.name) {
             setCharacters((oldChars) => [...oldChars, data.character]);
             
         // } else if(characters.id === Number(id)){
         //    alert('Personaje repetido')
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
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
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </>
   );
}

export default App;

/* const EMAIL = 'juan@gmail.com'
   const PASSWORD = 'juan1992' 
   
   const login = (userData) => {
      if(userData.password === PASSWORD && userData.email === EMAIL){ // TERNARIO es como if/else
         setAccess(true);
         navigate('/home');
      }
   }   
*/