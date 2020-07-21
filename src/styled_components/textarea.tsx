import styled from 'styled-components';

import { global } from '../styles/global';

const { colors, fonts, font_sizes, font_weights } = global;

export const Textarea = styled.textarea`
  background-color: ${colors.background};
  border: 1px dotted ${colors.primary_font};
  color: ${colors.primary_font};

  @media (prefers-color-scheme: dark) {
    background-color: ${colors.background_dark};
    border-color: ${colors.primary_font_dark};
    color: ${colors.primary_font_dark};
  }

  font-family: ${fonts.josefin_sans};
  font-size: ${font_sizes.xs};
  font-weight: ${font_weights.light};
  height: 4vh;
  width: calc(100px + 5vw);

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${colors.primary_font};
    @media (prefers-color-scheme: dark) {
      color: ${colors.primary_font_dark};
    }
  }
`;