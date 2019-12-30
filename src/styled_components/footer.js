import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const Footer = styled.footer`
  color: ${colors.disabled};
  font-size: ${font_sizes.xs};
  font-weight: ${font_weights.light};
  text-align: center;
`

export default Footer
