import styled from "styled-components"

import global from "../styles/global"

const { font_sizes, font_weights } = global

const paragraph = styled.p`
  font-size: ${font_sizes.m};
  font-weight: ${font_weights.light};
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: justify;
`

export default paragraph
