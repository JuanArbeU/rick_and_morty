/* Renderiza la searchbar dentro de este componente

1. import SearchBar from './SearchBar.jsx' */

import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Nav.css'

//APP le paso onSearch a Nav (parametro onSearch)
//Nav le paso onSearch a searchBar como prop.

const Nav = ({onSearch}) => {
  
    return(
      <>
        <div className='container'>
              <button className='boton1'>
                <Link className='boton2' to='/about'><strong>About</strong></Link>
                </button>
              <button className='boton1'>
                <Link className='boton2' to='/home'><strong>Home</strong></Link>
                </button>
            <SearchBar onSearch={onSearch}/>  
          </div>
      </>
    )
}

export default Nav;