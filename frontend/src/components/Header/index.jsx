import styles from './Header.module.css'
import LogoImage from '../../assets/logoInterConex.jpg'
import { faBars, faBoxArchive, faUser } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Filtro from '../PesquisaComponets/Filtro'

// eslint-disable-next-line react/prop-types
const Header = ({ handleShowNav }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const searchFocus = () => {
    setShowFilters(true);
  };

  const searchBlur = () => {
    if (searchTerm === '') {
      setShowFilters(false);
    }
  };

  const searchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length === 0) {
      setShowFilters(false);
    }
  };

  return (<>
    <header className={styles.headerContainer}>

      <div className={styles.headerPosition}>
        <FontAwesomeIcon icon={faBars} className={styles.iconButton} onClick={handleShowNav}/> 
        <img src= {LogoImage} alt="Logo do app" className={styles.logo}/>
      </div>

      {location.pathname === '/pesquisa' && (
        <div className={styles.headerPosition}>
            <input 
            className={styles.pesquisa} 
            placeholder='Pesquisar...'
            type="text" 
            value={searchTerm}
            onChange={searchChange}
            onFocus={searchFocus}
            onBlur={searchBlur}
            />
        </div>
      )}

      <div className={styles.headerPosition}> 
        <FontAwesomeIcon icon={faBoxArchive} className={styles.iconButton}/>
        <FontAwesomeIcon icon={faUser} className={styles.iconButton} />
      </div>
    </header>

    {showFilters && (
      <Filtro />
    )}
  </>)
}

export default Header;