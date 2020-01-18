import styled from "styled-components"

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 5vh 22vw 5vh;
  min-height: 4vh;

  @media screen and (max-width: 600px) {
    margin: 3vh 18vw 3vh;
  }
`

export default Header
