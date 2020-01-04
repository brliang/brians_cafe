import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes } = global

const Button = styled.button`
  color: ${colors.tertiary_font};
  border: none;
  font-size: ${font_sizes.xs};
`

export default Button
