import styled from "styled-components"

import global from "../styles/global"

const { font_sizes, font_weights } = global

const Paragraph = styled.p`
  display: inline-block;
  font-size: ${font_sizes.s};
  font-weight: ${font_weights.light};
  text-align: justify;
`

export default Paragraph
