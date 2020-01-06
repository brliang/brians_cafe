import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const H2 = styled.h2`
  color: ${colors.secondary_font_color};
  font-size: ${font_sizes.s};
  font-weight: ${font_weights.light};
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: ${font_sizes.s};
  }
`

export default H2
