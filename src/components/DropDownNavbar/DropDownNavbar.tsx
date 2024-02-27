import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./DropDownNavbar.scss";
import { Link } from "react-scroll";
import Logo from "../../assets/convivio_logo.png";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ x: "-100%" }}
            transition={{ duration: 0.4}}
            animate={{ x: "0%" }}
            className={`dropdown-container`}
          >
            <ul>
              <Link onClick={handleClick} to="inicio">
                <li>Início</li>
              </Link>
              <Link onClick={handleClick} to="servicos">
                <li>Serviços</li>
              </Link>
              <Link onClick={handleClick} to="projetos">
                <li>Projetos</li>
              </Link>
              <Link onClick={handleClick} to="about-us">
                <li>Como funciona?</li>
              </Link>
              <Link onClick={handleClick} to="who-we-are">
                <li>Sobre nós</li>
              </Link>
              <Link onClick={handleClick} to="orcamento">
                <li>Orçamento</li>
              </Link>
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
};
