/* Renderiza la searchbar dentro de este componente

1. import SearchBar from './SearchBar.jsx' */

import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import style from './Nav.module.css'
import { useLocation } from 'react-router-dom';

//APP le paso onSearch a Nav (parametro onSearch)
//Nav le paso onSearch a searchBar como prop.

const Nav = ({onSearch}) => {
  const location = useLocation()
  if(location.pathname === '/') return 
    return(
      <>
        <div className={style.container}>
              <button className={style.boton1}>
                <Link className={style.boton2} to='/about'>
                  <strong>About</strong>
                  </Link>
                </button>
              <button className={style.boton1}>
                <Link className={style.boton2} to='/home'><strong>Home</strong></Link>
                </button>
            <SearchBar onSearch={onSearch}/>  
          </div>
      </>
    )
  }


export default Nav;