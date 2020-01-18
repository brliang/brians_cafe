import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const H2 = styled.h2`
  align-items: center;
  color: ${colors.primary_font_color};
  display: flex;
  font-size: ${font_sizes.s};
  font-weight: ${font_weights.medium};
  justify-content: center;
  margin: 0 0 0.4vh;
`

export default H2
