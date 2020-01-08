import styled from "styled-components"

const Main = styled.main`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  margin: 2vh auto 2vh;
  max-width: 40%;
  min-height: 45vh;
  text-align: center;

  @media screen and (max-width: 1200px) {
    max-width: 55%;
  }

  @media screen and (max-width: 1000px) {
    max-width: 70%
  }

  @media screen and (max-width: 800px) {
    max-width: 85%;
  }

  @media screen and (max-width: 600px) {
    display: block;
    max-width: 80%;
  }

  @media screen and (max-width: 400px) {
    max-width: 90%;
  }
`

export default Main
