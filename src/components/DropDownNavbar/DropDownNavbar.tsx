import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./DropDownNavbar.scss";
import { Link } from "react-scroll";
import Logo from "../../assets/convivio_logo.png";

export const DropDownNavbar = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const handleClick = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <>
      <div className="navbar-container-mobile">
        <div className="navbar-header">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setOpenDropDown(!openDropDown)}
            className={`bars-icon ${openDropDown ? "bars-icon-open" : ""}`}
            style={{ color: "#ffffff" }}
          />
          <Link to={"inicio"}>
            <img src={Logo} className="navbar-logo" alt="logo" />
          </Link>
        </div>

        {openDropDown && (
          <div className={`dropdown-container`}>
            <ul>
              <Link onClick={() => handleClick()} to="inicio">
                <li>Início</li>
              </Link>
              <Link onClick={() => handleClick()} to="projetos">
                <li>Projetos</li>
              </Link>
              <Link to="">
                <li>Como funciona?</li>
              </Link>
              <Link to="">
                <li>Sobre nós</li>
              </Link>
              <Link to="">
                <li>Orçamento</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
