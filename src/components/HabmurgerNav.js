import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";

import { GiHamburgerMenu } from "react-icons/gi";
import "./HabmurgerNav.css";
const HabmurgerNav = ({ open, setOpen }) => {
  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Feaures", to: "features" },
    { name: "Services", to: "services" },
    { name: "Our Clients", to: "test" },
    { name: "Q & A", to: "q&a" },
    { name: "Contacts", to: "footer" },
  ];

  return (
    <>
      <div className='dropdown-container'>
        <div className='drop-down-logo' onClick={() => setOpen(!open)}>
          <GiHamburgerMenu fontSize='30' />
          <RouterLink to='./'>
            <p className='logo-txt'>H-WARE</p>
          </RouterLink>
        </div>
        <div
          className={`dropdown ${
            open ? "dropdown-btn-container " : "dropdown-btn-hidden "
          }`}
          onClick={() => setOpen(false)}
        >
          {navLinks.map((element) => (
            <Link to={element.to} smooth='true' onClick={() => setOpen(false)}>
              <div className='dropdown-btn'>{element.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HabmurgerNav;
