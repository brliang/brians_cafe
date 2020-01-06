import styled from "styled-components"

import global from "../styles/global"

const { colors } = global

const Footer = styled.footer`
  border-color: ${colors.primary_color};
  border-style: solid;
  border-width: 1px 0px 0px 0px;
  margin: 20px auto 0px auto;
  text-align: center;
  width: 70%;
`

export default Footer
