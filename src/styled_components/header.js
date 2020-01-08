import styled from "styled-components"

const Header = styled.header`
  align-items: center;
  display: flex;
  height: 3vh;
  justify-content: space-around;
  margin: 5vh 30% 5vh;

  @media screen and (max-width: 600px) {
    margin: 5vh 8% 5vh;
  }
`

export default Header
