import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const H2 = styled.h2`
  align-items: center;
  color: ${colors.secondary_font_color};
  display: flex;
  font-size: ${font_sizes.s};
  font-weight: ${font_weights.light};
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 600px) {
    font-size: ${font_sizes.s};
  }
`

export default H2
