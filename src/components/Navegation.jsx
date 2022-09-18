import '../styles/Navegation.css'
import { Link } from 'react-router-dom'
import Search from './Search'


function Navegation() {

  return (
    <nav className="navegation">
      <Link className='logo' to="/">Tomorrow?</Link>
      <ul className="nav-list">
        <li>           
          <Link to="home">Home</Link>
        </li>
        <li >
          <Link to="map">Map</Link>
        </li>
      </ul>
      <Search/>
    </nav>
  )

}
export default Navegation;