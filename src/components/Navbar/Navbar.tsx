import "./Navbar.scss";
import Logo from '../../assets/convivio_logo.png';
import "bootstrap/dist/css/bootstrap.css"; 
import { DropDownNavbar } from "../DropDownNavbar/DropDownNavbar";


export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
      <img src={Logo} className="navbar-logo" alt="logo" />
        <div className="navbar-links">
            <ul>
              <li>Início</li>
              <li>Projetos</li>
              <li>Como funciona?</li>
              <li>Sobre nós</li>
              <li>Orçamento</li>
            </ul>
        </div>
        <DropDownNavbar extraClass="dropdown-navbar" />
      </div>
    </div>
  );
};
