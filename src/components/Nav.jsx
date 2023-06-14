/* Renderiza la searchbar dentro de este componente

1. import SearchBar from './SearchBar.jsx' */

import SearchBar from './SearchBar';

//APP le paso onSearch a Nav (parametro onSearch)
//Nav le paso onSearch a searchBar como prop.

const Nav = ({onSearch}) => {

    return(
        <div>
          <SearchBar onSearch={onSearch}/>  
        </div>
    )
}

export default Nav;