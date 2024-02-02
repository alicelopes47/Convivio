import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import Logo from '../../assets/convivio_logo.png';
import './DropDownNavbar.scss';
import { Link } from "react-scroll";

interface Props {
    extraClass?: string;
}

export const DropDownNavbar = ({extraClass}: Props) => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const handleClick = () => {
        setOpenDropDown(!openDropDown);
    }

    return (
        <div className={`dropdown ${extraClass}`}>
            <FontAwesomeIcon icon={faBars} onClick={() => setOpenDropDown(!openDropDown)} className={`bars-icon ${openDropDown ? 'bars-icon-open': ''}`} style={{color: "#ffffff",}} />
            {openDropDown && (
                <div className={`dropdown-content ${openDropDown ? 'open-dropdown': ''}`}>
                <img src={Logo} className="dropdown-logo" alt="logo" />
                <ul>
                <Link onClick={() => handleClick()} to="inicio"><li>Início</li></Link>
                <Link onClick={() => handleClick()} to="projetos"><li>Projetos</li></Link>
                <Link to=""><li>Como funciona?</li></Link>
                <Link to=""><li>Sobre nós</li></Link>
                <Link to=""><li>Orçamento</li></Link>
                </ul>
              </div>
            )}

        </div>
    )
 }