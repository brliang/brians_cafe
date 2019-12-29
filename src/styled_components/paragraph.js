import styled from "styled-components"

import global from "../styles/global"

const { font_sizes, font_weights } = global

const paragraph = styled.p`
  display: inline-block;
  font-size: ${font_sizes.s};
  font-weight: ${font_weights.light};
  margin-bottom: 40px;
  text-align: justify;
`

export default paragraph
