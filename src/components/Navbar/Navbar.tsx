import "./Navbar.scss";
import NavbarLayout from "../../assets/rectangle_large.png";
import Logo from '../../assets/convivio_logo.png';
import Image from 'react-bootstrap/Image'
import "bootstrap/dist/css/bootstrap.css"; 


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
      </div>
    </div>
  );
};
