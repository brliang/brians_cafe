import styled from 'styled-components';

import { global } from '../styles/global';

const { font_sizes, font_weights } = global;

export const H1 = styled.h1`
  font-size: ${font_sizes.l};
  font-weight: ${font_weights.bold};
`;
