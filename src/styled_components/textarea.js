import styled from "styled-components"

import global from "../styles/global"

const { colors, fonts, font_sizes, font_weights } = global

const Textarea = styled.textarea`
  background-color: ${colors.quaternary_color};
  border: 1px dotted ${colors.secondary_color};
  font-family: ${fonts.josefin_sans};
  font-size: ${font_sizes.xs};
  font-weight: ${font_weights.light};
  height: 4vh;
  width: calc(100px + 5vw);

  &:focus {
    outline: none;
  }
`

export default Textarea
