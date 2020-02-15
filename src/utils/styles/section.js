import styled from "styled-components";
import { COLORS, fontFamily } from './assets';

const Main = styled.div`
  display: flex;
  justify-content: center;
  color: ${COLORS.BLACK_80};
  background-color: ${COLORS.WHITE};
  ${fontFamily};
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

const SportLink = styled.div`
  content: "E007";
  background-color: transparent;
  color: ${COLORS.BLUE_DARK};
`;

const Sidebar = styled.div`
  width: 20%
`;

const RightAlign = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1em;
  width: 100%;
`;

export {
  LocationCard,
  Main,
  Menu,
  RightAlign,
  Sidebar,
  SportLink
};
