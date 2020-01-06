import styled from "styled-components"

const Main = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 5vh auto;
  max-width: 50%;
  min-height: 40vh;
  text-align: center;

  @media screen and (max-width: 1000px) {
    max-width: 85%;
  }

  @media screen and (max-width: 600px) {
    display: block;
    max-width: 95%;
    margin: 2vh auto;
  }
`

export default Main
