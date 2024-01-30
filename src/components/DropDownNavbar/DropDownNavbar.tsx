import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import Logo from '../../assets/convivio_logo.png';
import './DropDownNavbar.scss';

interface Props {
    extraClass?: string;
}

export const DropDownNavbar = ({extraClass}: Props) => {
    const [openDropDown, setOpenDropDown] = useState(false);
    return (
        <div className={`dropdown ${extraClass}`}>
            <FontAwesomeIcon icon={faBars} onClick={() => setOpenDropDown(!openDropDown)} className={`bars-icon ${openDropDown ? 'bars-icon-open': ''}`} style={{color: "#ffffff",}} />
            {openDropDown && (
                <div className={`dropdown-content ${openDropDown ? 'open-dropdown': ''}`}>
                <img src={Logo} className="dropdown-logo" alt="logo" />
                <ul>
                <li>Início</li>
                <li>Projetos</li>
                <li>Como funciona?</li>
                <li>Sobre nós</li>
                <li>Orçamento</li>
                </ul>
              </div>
            )}

        </div>
    )
 }