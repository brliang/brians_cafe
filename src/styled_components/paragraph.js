import styled from "styled-components"

import global from "../styles/global"

const { colors, font_sizes, font_weights } = global

const Paragraph = styled.p`
  background-color: ${colors.tertiary_color};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  font-size: ${font_sizes.s};
  font-weight: ${font_weights.light};
  margin: 0 5%;
  padding: 10px;
  text-align: justify;
  transition: 0.1s;

  @media screen and (max-width: 1000px) {
    box-shadow: none;
  }
`

export default Paragraph
