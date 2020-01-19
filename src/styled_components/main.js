import styled from "styled-components"

const Main = styled.div`
  margin: 2vh auto 8vh;
  max-width: 30vw;

  @media screen and (min-width: 1800px) {
    max-width: 20vw;
  }

  @media screen and (max-width: 800px) {
    max-width: 50vw;
  }

  @media screen and (max-width: 700px) {
    max-width: 65vw;
  }

  @media screen and (max-width: 600px) {
    max-width: 80vw;
  }

  @media screen and (max-width: 500px) {
    max-width: 95vw;
  }
`

export default Main
