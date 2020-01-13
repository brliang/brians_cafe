import styled from "styled-components"

const Main = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2vh auto 2vh;
  max-width: 40vw;
  text-align: center;

  @media screen and (max-width: 800px) {
    max-width: 60vw;
  }

  @media screen and (max-width: 700px) {
    max-width: 75vw;
  }

  @media screen and (max-width: 600px) {
    max-width: 90vw;
  }
`

export default Main
