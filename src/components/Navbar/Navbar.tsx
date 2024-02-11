import "./Navbar.scss";
import Logo from '../../assets/convivio_logo.png';
import "bootstrap/dist/css/bootstrap.css"; 
import { DropDownNavbar } from "../DropDownNavbar/DropDownNavbar";
import { Link } from "react-scroll";


export const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="navbar-content">
      <Link to={'inicio'}><img src={Logo} className="navbar-logo" alt="logo" /></Link>
        <div className="navbar-links">
            <ul>
              <Link to={'inicio'}><li>Início</li></Link>
              <Link to={'servicos'}><li>Serviços</li></Link>
              <Link to={'projetos'}><li>Projetos</li></Link>
              <Link to={'about-us'}><li>Como funciona?</li></Link>
              <Link to={'who-we-are'}><li>Sobre nós</li></Link>
              <Link to={'orcamento'}><li>Orçamento</li></Link>
            </ul>
        </div>
        <DropDownNavbar extraClass="dropdown-navbar" />
      </div>
    </div>
  );
};
