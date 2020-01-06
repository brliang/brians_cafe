import styled from "styled-components"

import global from "../styles/global"

const { colors } = global

const Header = styled.header`
  align-items: center;
  border-color: ${colors.primary_color};
  border-style: solid;
  border-width: 0px 0px 1px;
  display: flex;
  height: 6vh;
  justify-content: space-around;
  margin: 10px 25% 50px;

  @media screen and (max-width: 1000px) {
    margin: 10px 8% 20px;
  }
`

export default Header
