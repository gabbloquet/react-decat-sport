import styled from "styled-components";
import {Link} from "react-router-dom";

const Navbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #0082C3;
`;

const NavLink = styled(Link)`
  color: white;
  padding-left: 1em;
  font-weight: bold;
  text-decoration: none;
  :hover {
    font-style: italic;
  }
`;

export {
  Navbar,
  NavLink
};
