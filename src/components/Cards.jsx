import Card from './Card';
import './Cards.css';

export default function Cards({characters, onClose}) {
   console.log(characters);
   return (
   <div className='card_container'>
      {characters && characters.map((char, index)=>{
            return <Card 
               key = {index}
               id = {char.id}
               name = {char.name}
               status = {char.status}
               species = {char.species}
               gender = {char.gender}
               origin = {char.origin.name}
               image = {char.image}
               onClose = {onClose}
            />
         })
      }   
   </div>
   )
}
 