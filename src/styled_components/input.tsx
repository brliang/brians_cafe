import styled from 'styled-components';

import { global } from '../styles/global';

const { colors, fonts, font_sizes, font_weights } = global;

export const Input = styled.input`
  border: 1px solid ${colors.primary_font};
  border-width: 0px 0px 1px;
  width: 100%;
  box-sizing: border-box;

  background-color: ${colors.background};
  color: ${colors.primary_font};

  @media (prefers-color-scheme: dark) {
    border-color: ${colors.primary_font_dark};

    background-color: ${colors.background_dark};
    color: ${colors.primary_font_dark};
  }

  font-family: ${fonts.josefin_sans};
  font-size: ${font_sizes.xs};
  font-weight: ${font_weights.light};

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${colors.primary_font};
    @media (prefers-color-scheme: dark) {
      color: ${colors.primary_font_dark};
    }
  }

  :-internal-autofill-selected {
    background-color: ${colors.background} !important;
    color: ${colors.primary_font} !important;

    @media (prefers-color-scheme: dark) {
      border-color: ${colors.primary_font_dark} !important;

      background-color: ${colors.background_dark} !important;
      color: ${colors.primary_font_dark} !important;
    }
  }
`;
