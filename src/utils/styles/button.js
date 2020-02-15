import styled from "styled-components";
import { FONTSIZES, SIZES, EFFECTS, COLORS, fontFamily } from './assets';

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

const ButtonBlueDark = styled(Button)`
  background: ${COLORS.BLUE_DARK};
  :after {
    background-color: ${COLORS.BLUE_NAVY};
  }
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

const ReturnButton = styled(ButtonBlueDark)`
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

export {
  Button,
  ButtonBlue,
  ButtonYellow,
  Cellule,
  LeftArrow,
  ReturnButton,
  RightArrow
};
