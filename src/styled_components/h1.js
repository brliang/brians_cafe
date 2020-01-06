import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const H1 = styled.h1`
  color: ${colors.primary_font_color};
  font-size: ${font_sizes.l};
  font-weight: ${font_weights.bold};
  min-height: 10vh;
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: ${font_sizes.m};
  }
`

export default H1
