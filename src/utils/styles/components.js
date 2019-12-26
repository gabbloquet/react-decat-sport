import styled from "styled-components";
import { FONTSIZES, SIZES, EFFECTS, COLORS, fontFamily } from './assets';

const Title = styled.h1`
    padding: 0.5em 0 0 0;
    margin: 0;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.BLUE};
`;

const Form = styled.form`
  color: white;
  padding: 1em;
  display: flex;
  align-items: start;
  justify-content: center;
`;

const Label = styled.label`
  padding-right: 1em;
  font-family: Roboto-condensed;
  font-weight: 700;
  font-style: italic;
  display: flex;
  align-items: center;
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

const Table = styled.table`
  background-color: ${COLORS.BLUE_DARK};
`;

export {Button, ButtonBlue, ButtonYellow, Input, Form, Label, Main, Table, Title};
