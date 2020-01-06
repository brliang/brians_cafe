import styled from "styled-components"

const Main = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 20px auto;
  max-width: 50%;
  min-height: 50vh;
  text-align: center;

  @media screen and (max-width: 1000px) {
    display: block;
    max-width: 85%;
    min-height: 40vh;
  }
`

export default Main
