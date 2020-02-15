import React from 'react'
import {Navbar, NavLink} from "../../utils/styles/components";

const Topbar = () => {
  return (
    <Navbar>
      <img src="https://www.decathlon.fr/assets/images/decathlon-logo.svg" alt="Decathlon magasin de sport"/>
      <NavLink to='/'>Homepage</NavLink>
      <NavLink to='/sports'>Sports</NavLink>
      <NavLink to='/sportplaces'>Sport places</NavLink>
    </Navbar>
  );
};

export default Topbar;
