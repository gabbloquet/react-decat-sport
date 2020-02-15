import styled from "styled-components";
import { COLORS, fontFamily } from './assets';

const SectionTitle = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2em;
  ${fontFamily};
`;

const Title = styled.h1`
  padding: 0.5em 0 0 0;
  margin: 0;
  color: ${COLORS.BLUE};
  ${fontFamily};
`;

export {
  SectionTitle,
  Title
};
