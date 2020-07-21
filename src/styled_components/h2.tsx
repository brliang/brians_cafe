import styled from 'styled-components';

import { global } from '../styles/global';

const { font_sizes, font_weights } = global;

export const H2 = styled.h2`
  font-size: ${font_sizes.s};
  font-weight: ${font_weights.medium};
`;
