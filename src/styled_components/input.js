import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const Input = styled.input`
  border-color: ${colors.border_color};
  border-style: dotted;
  border-width: 0px 0px 1px 0px;
  font-size: ${font_sizes.xs};
  font-weight: ${font_weights.light};
  width: 200px;
`

export default Input
