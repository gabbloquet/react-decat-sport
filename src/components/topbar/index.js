import React from 'react'
import {Navbar, NavLink} from "../../utils/styles/navigation";
import {WhiteTitle} from "../../utils/styles/title";
import {Links} from "../../utils/styles/section";

const Topbar = () => {
  return (
    <Navbar>
      <img src="https://www.decathlon.fr/assets/images/decathlon-logo.svg" alt="Decathlon magasin de sport"/>
      <WhiteTitle>Sports App</WhiteTitle>
      <Links>
        <NavLink to='/'>Homepage</NavLink>
        <NavLink to='/recommended-sports'>Recommended Sports</NavLink>
        <NavLink to='/intelligent-search'>Intelligent Search</NavLink>
        <NavLink to='/sport-places'>Sport places</NavLink>
      </Links>
    </Navbar>
  );
};

export default Topbar;
