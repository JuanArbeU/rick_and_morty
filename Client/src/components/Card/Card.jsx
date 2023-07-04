import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


function Card({id, name, gender, species, origin, image, status, onClose, addFav, removeFav, myFavorites}) { // props es un objeto

   const [isFav, setIsFav] = useState(false); 

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }
      else{
         setIsFav(true);
         addFav({id, name, gender, species, origin, image, status, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div className={style.card}>
         <button className = {style.boton3} onClick = {() => onClose(id)}>X</button>
            <Link className = {style.card-name} to={`/detail/${id}`}>
               <h2 className = {style.cardTitle}>{name}</h2>
            </Link>
            <img className={style.img} src={image} alt={name} /> 
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
      </div>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {  
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);