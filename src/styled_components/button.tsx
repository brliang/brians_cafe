import styled from 'styled-components';

import { global } from '../styles/global';

const { colors } = global;

export const Button = styled.button`
  background-color: ${colors.cta};
  font-family: ${global.fonts.josefin_sans};
  border: none;
  color: ${colors.primary_font};
  padding: 5px;
`;
