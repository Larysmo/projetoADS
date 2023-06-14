import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext'
import './navbar.css';



export default function Navbar() {

const {handleLogout} = useContext(UserContext)

const handleSair=() => {
  handleLogout()
}
  // elementos do menu envolvidos dentro da tag nav. Traz h3 ue compõe o menu pra dentro do nav
  return (
    <nav className='listaMenu'> 
    <h3>FACIT</h3>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/notas">Notas</NavLink>
        </li>
        <li>
          <NavLink to="/grade">Grade Horária</NavLink>
        </li>
        <li>
          <NavLink to="/financeiro">Financeiro</NavLink>
        </li>
        {/* <li>
          <NavLink to="/solicitar">Solicitar</NavLink>
        </li> */}
        <li>
          <NavLink to="/solicitacoes">Solicitações</NavLink>
        </li> 
      </ul>
      <button><Link to="/" onClick={handleSair}>Sair</Link></button>
    </nav>
    
  );
}
