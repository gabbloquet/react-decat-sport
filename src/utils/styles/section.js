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
  width: 20%;
`;

const LocationCard = styled.div`
  flex-direction: column;
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

const Links = styled.div`
  display: flex;
  width: 100%;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const MainContent = styled.div`
  width: 100%;
`;

export {
  Links,
  LocationCard,
  Main,
  MainContent,
  Menu,
  Sidebar,
  SportLink,
  Step
};
