import styled from "styled-components"

const Header = styled.header`
  align-items: center;
  display: flex;
  height: 3vh;
  justify-content: space-around;
  margin: 2vh 30% 5vh;

  @media screen and (max-width: 1000px) {
    margin: 2vh 8% 5vh;
  }
`

export default Header
