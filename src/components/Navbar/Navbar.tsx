import "./Navbar.scss";
import Logo from '../../assets/convivio_logo.png';
import "bootstrap/dist/css/bootstrap.css"; 
import { DropDownNavbar } from "../DropDownNavbar/DropDownNavbar";
import { Link, animateScroll } from "react-scroll";

export const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="navbar-content">
      <img src={Logo} className="navbar-logo" alt="logo" />
        <div className="navbar-links">
            <ul>
              <Link to={'inicio'}><li>Início</li></Link>
              <Link to={'projetos'}><li>Projetos</li></Link>
              <Link to={'a'}><li>Como funciona?</li></Link>
              <Link to={'a'}><li>Sobre nós</li></Link>
              <Link to={'a'}><li>Orçamento</li></Link>
            </ul>
        </div>
        <DropDownNavbar extraClass="dropdown-navbar" />
      </div>
    </div>
  );
};
