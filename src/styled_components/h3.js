import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const H3 = styled.h3`
  align-items: center;
  color: ${colors.tertiary_font_color};
  display: flex;
  font-size: ${font_sizes.xs};
  font-weight: ${font_weights.light};
  justify-content: center;
  margin: 0 0 0.2vh;
  width: 100vw;
`

export default H3
