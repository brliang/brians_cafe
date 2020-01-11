import styled from "styled-components"

const Main = styled.main`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  margin: 2vh auto 2vh;
  max-width: 40vw;
  text-align: center;

  @media screen and (max-width: 1400px) {
    max-width: 50vw;
  }

  @media screen and (max-width: 1200px) {
    max-width: 60vw;
  }

  @media screen and (max-width: 1000px) {
    max-width: 70vw
  }

  @media screen and (max-width: 800px) {
    max-width: 80vw;
  }

  @media screen and (max-width: 600px) {
    display: block;
    max-width: 85vw;
  }

  @media screen and (max-width: 400px) {
    max-width: 90vw;
  }

  @media screen and (max-width: 300px) {
    max-width: 95vw;
  }
`

export default Main
