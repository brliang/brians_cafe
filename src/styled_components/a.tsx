import styled from 'styled-components';
import { Link } from 'gatsby';

import { global } from '../styles/global';

const { colors, font_weights } = global;

export const A = styled.a`
  color: ${colors.link};
  font-weight: ${font_weights.medium};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

export const GatsbyLink = styled(Link)`
  color: ${colors.link};
  font-weight: ${font_weights.medium};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
