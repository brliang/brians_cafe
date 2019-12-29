import styled from "styled-components"

import global from "../styles/global"

const { font_sizes, font_weights } = global

const H2 = styled.h2`
  font-size: ${font_sizes.m};
  font-weight: ${font_weights.medium};
  margin-top: 30px;
`

export default H2
