import styled from "styled-components"

import global from "../styles/global"

const { font_sizes, font_weights } = global

const H1 = styled.h1`
  font-size: ${font_sizes.l};
  font-weight: ${font_weights.bold};
  margin: inherit auto;
  text-align: center;
`

export default H1
