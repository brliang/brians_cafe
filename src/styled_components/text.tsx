import styled from 'styled-components';

import { global } from '../styles/global';

const { font_sizes, font_weights } = global;

export const Text = styled.text`
  font-weight: ${font_weights.light};
  font-size: ${font_sizes.s};
`;
