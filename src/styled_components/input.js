import styled from "styled-components"

import global from "../styles/global"

const { colors, fonts, font_sizes, font_weights } = global

const Input = styled.input`
  background-color: ${colors.quaternary_color};
  border-color: ${colors.tertiary_color};
  border-style: dotted;
  border-width: 0px 0px 1px;
  font-family: ${fonts.josefin_sans};
  font-size: ${font_sizes.xs};
  font-weight: ${font_weights.light};
  width: calc(100px + 5vw);

  &:focus {
    outline: none;
  }
`

export default Input
