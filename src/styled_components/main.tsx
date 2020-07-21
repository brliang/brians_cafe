import styled from 'styled-components';

import { global } from '../styles/global';

const { colors } = global;

export const Main = styled.main`
  background-color: ${colors.background_focus};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  @media (prefers-color-scheme: dark) {
    background-color: ${colors.background_focus_dark};
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.5),
      0 2px 4px 0 rgba(255, 255, 255, 0.5);
  }

  line-height: 1.25;
  padding: 20px;
  text-align: left;
`;
