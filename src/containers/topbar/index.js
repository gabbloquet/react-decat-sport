import React from 'react'
import {Navbar, NavLink} from "../../utils/styles/navigation";
import {WhiteTitle} from "../../utils/styles/title";
import {RightAlign} from "../../utils/styles/section";

const Topbar = () => {
  return (
    <Navbar>
      <img src="https://www.decathlon.fr/assets/images/decathlon-logo.svg" alt="Decathlon magasin de sport"/>
      <WhiteTitle>Sports Front</WhiteTitle>
      <RightAlign>
        <NavLink to='/'>Homepage</NavLink>
        <NavLink to='/recommended-sports-research'>Recommended Sports Research</NavLink>
        <NavLink to='/sport-places'>Sport places</NavLink>
      </RightAlign>
    </Navbar>
  );
};

export default Topbar;
