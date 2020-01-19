import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const Paragraph = styled.p`
  background-color: ${colors.tertiary_color};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  font-size: ${font_sizes.s};
  font-weight: ${font_weights.light};
  line-height: 1.25;
  margin: 2vh auto 8vh;
  max-width: 30vw;
  padding: 20px;
  text-align: left;

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

export default Paragraph
