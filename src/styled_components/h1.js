import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const H1 = styled.h1`
  align-items: center;
  color: ${colors.primary_font_color};
  display: flex;
  font-size: ${font_sizes.l};
  font-weight: ${font_weights.bold};
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 600px) {
    font-size: ${font_sizes.m};
  }
`

export default H1
