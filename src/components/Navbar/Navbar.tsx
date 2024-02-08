import "./Navbar.scss";
import Logo from '../../assets/convivio_logo.png';
import "bootstrap/dist/css/bootstrap.css"; 
import { DropDownNavbar } from "../DropDownNavbar/DropDownNavbar";
import { Link, animateScroll } from "react-scroll";

interface Props {
  onClickProjetos: () => void;
}

export const Navbar = ({onClickProjetos}: Props) => {

  return (
    <div className="navbar-container">
      <div className="navbar-content">
      <img src={Logo} className="navbar-logo" alt="logo" />
        <div className="navbar-links">
            <ul>
              <Link to={'inicio'}><li>Início</li></Link>
              <Link to={'servicos'}><li>Serviços</li></Link>
              <Link onClick={onClickProjetos} to={'projetos'}><li>Projetos</li></Link>
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
