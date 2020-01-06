import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const Textarea = styled.textarea`
  background-color: ${colors.quaternary_color};
  border: 1px dotted ${colors.secondary_color};
  font-size: ${font_sizes.xs};
  font-weight: ${font_weights.light};
  height: 50px;
  width: 200px;

  &:focus {
    outline: none;
  }
`

export default Textarea
