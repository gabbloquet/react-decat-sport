import styled from "styled-components";
import { FONTSIZES, SIZES, EFFECTS, COLORS, fontFamily } from './assets';
import {Link} from "react-router-dom";
import {keyframes} from "styled-components/dist/styled-components.browser.esm";

const Title = styled.h1`
  padding: 0.5em 0 0 0;
  margin: 0;
  color: ${COLORS.BLUE};
  ${fontFamily};
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  color: ${COLORS.BLACK_80};
  background-color: ${COLORS.WHITE};
  ${fontFamily};
`;

const Form = styled.form`
  color: ${COLORS.BLACK_20};
  padding: 1em;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  ${fontFamily};
`;

const Label = styled.label`
  padding-right: 1em;
  font-family: Roboto-condensed;
  font-weight: 700;
  font-style: italic;
  display: flex;
  align-items: center;
  ${fontFamily};
`;

const Input = styled.input`
  font-family: Roboto-condensed;
  font-weight: 700;
  font-style: italic;
  line-height: 26px;
  padding: 11px 50px 11px 15px;
  border: 1px solid #d4d7d9;
  background: #edeff1;
  margin: 0;
  border-radius: 2px 0 0 2px;
  border-right: 0;
  text-overflow: ellipsis;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #575859;
  margin-left: 0.5em;
  ${fontFamily};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: ${EFFECTS.RADIUS};
  font-weight: 700;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;
  color: ${COLORS.WHITE};
  padding: calc(${SIZES.HOMEPAGE_PADDING} / 3) calc(${SIZES.HOMEPAGE_PADDING} / 2);
  font-size: ${FONTSIZES.FONT.XSMALL};
  border: none;
  ${fontFamily};
  z-index: 1;
  transition: background-color 0.2s ease 0.1s;
  :after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 150%;
    height: 150%;
    border-radius: inherit;
    transform-origin: top right;
    transform: rotate(-10deg) translateY(53%);
    transition: transform 0.1s ease-in 0.1s;
    z-index: -1;
    opacity: 0.4;
    box-sizing: border-box;
  }
  :hover:after {
    transform: translateY(0);
  }
`;

const ButtonYellow = styled(Button)`
  background: ${COLORS.YELLOW};
  :after {
    background-color: ${COLORS.YELLOW_DARK};
  }
`;

const ButtonBlue = styled(Button)`
  background: ${COLORS.BLUE};
  :after {
    background-color: ${COLORS.BLUE_DARK};
  }
`;

const Menu = styled.div`
  ${fontFamily};
  width: 35%;
`;

const LocationCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  ${fontFamily};
`;

const Section = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2em;
  ${fontFamily};
`;

const Cellule = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left:1em;
  cursor: pointer;
  border: 0;
  background: ${COLORS.GREY_MEDIUM};
  :hover {
    background-color: ${COLORS.WHITE};
  }
`;

const SportMiniature = styled.img`
  height: 3rem;
  width: 4em;
`;

const SportLink = styled.div`
  content: "E007";
  background-color: transparent;
  color: ${COLORS.BLUE_DARK};
`;

const ReturnButton = styled(ButtonBlue)`
  width: 100%;
  height: 2.3em;
  padding: 0;
  padding-right: 1em;
  flex-direction: row-reverse;
`;

const ReturnArrow = styled.i`
    border: solid ${COLORS.GREY_MID};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
`;

const LeftArrow = styled(ReturnArrow)`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

const RightArrow = styled(ReturnArrow)`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  :after {
    content: " ";
    display: block;
    width: 1.5em;
    height: 1.5em;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: ${COLORS.BLUE_DARK} transparent ${COLORS.BLUE_DARK} transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;

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
  Button,
  ButtonBlue,
  ButtonYellow,
  Cellule,
  Input,
  Form,
  Label,
  LeftArrow,
  Loader,
  LocationCard,
  Main,
  Menu,
  Navbar,
  NavLink,
  ReturnButton,
  RightArrow,
  Section,
  SportLink,
  SportMiniature,
  Title
};
