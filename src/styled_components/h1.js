import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const H1 = styled.h1`
  align-items: center;
  color: ${colors.primary_font_color};
  display: flex;
  font-size: ${font_sizes.l};
  font-weight: ${font_weights.bold};
  margin: 0;
  min-height: 10vh;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    font-size: ${font_sizes.m};
  }
`

export default H1
