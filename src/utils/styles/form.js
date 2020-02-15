import styled from "styled-components";
import { COLORS, fontFamily } from './assets';



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

export {
  Input,
  Form,
  Label,
};
