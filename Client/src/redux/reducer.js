import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: payload, 
                allCharacters: payload 
            };
        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: payload,
                allCharactersFav: payload 
            };
        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(character => character.gender === payload)
            return{
                ...state,
                myFavorites: allCharactersFiltered
            }
        case ORDER:
            const allCharactersFavCopy = {...state.allCharactersFav}
            return{
                ...state,
                myFavorites:
                    payload === ADD_FAV
                    ? allCharactersFavCopy.sort((a,b) => a.id - b.id)
                    : allCharactersFavCopy.sort((a,b) => b.id - a.id)
            }
        default:
            return {...state}
    }
}

export default reducer; 