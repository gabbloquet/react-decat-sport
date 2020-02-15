import styled from "styled-components";
import { COLORS, fontFamily } from './assets';

const SectionTitle = styled.h1`
  margin-top: 1em;
  text-align: center;
  ${fontFamily};
`;

const Title = styled.h1`
  padding: 0.5em 0 0 0;
  margin: 0;
  color: ${COLORS.BLUE};
  ${fontFamily};
`;

const WhiteTitle = styled.h4`
  font-style: italic;
  margin: 0;
  color: ${COLORS.WHITE};
  ${fontFamily};
`;

const StepTitle = styled(Title)`
  justify-content: center;
`;

export {
  SectionTitle,
  StepTitle,
  Title,
  WhiteTitle
};
