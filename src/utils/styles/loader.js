import styled from "styled-components";
import { COLORS } from './assets';
import {keyframes} from "styled-components/dist/styled-components.browser.esm";

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

export {
  Loader
};
