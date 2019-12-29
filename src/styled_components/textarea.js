import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const Textarea = styled.textarea`
  border-color: ${colors.border_color};
  font-size: ${font_sizes.xs};
  font-weight: ${font_weights.light};
  height: 50px;
  width: 200px;
`

export default Textarea
