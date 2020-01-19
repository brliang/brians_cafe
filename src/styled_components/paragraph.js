import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const Paragraph = styled.p`
  background-color: ${colors.tertiary_color};
  font-size: ${font_sizes.s};
  font-weight: ${font_weights.light};
  line-height: 1.25;
  margin: 0 1vw;
  padding: 20px;
  text-align: left;
`

export default Paragraph
