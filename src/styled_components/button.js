import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const Button = styled.button`
  background-color: ${colors.tertiary_color};
  border: none;
  color: ${colors.primary_font_color};
  font-size: ${font_sizes.xs};
  font-weight: ${font_weights.light};

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${colors.secondary_color};
  }

  &:active {
    background-color: ${colors.primary_color};
  }
`

export default Button
