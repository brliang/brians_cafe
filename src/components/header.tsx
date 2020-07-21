import * as React from 'react';
import styled from 'styled-components';

import { pages } from '../constants/global';
import { H2, GatsbyLink } from '../styled_components/index';

export const Header = ({ pageTitle }: { pageTitle: string }) => {
  switch (pageTitle) {
    case pages.HOME:
      return null;
    case pages.JETSAM:
    case pages.PHOTOS:
    default:
      return (
        <StyledHeader>
          <H2>
            <GatsbyLink to="/">home</GatsbyLink>
          </H2>
          <H2>
            <GatsbyLink to="/jetsam/">jetsam</GatsbyLink>
          </H2>
          <H2>
            <GatsbyLink to="/photos/">photos</GatsbyLink>
          </H2>
        </StyledHeader>
      );
  }
};

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 20px 15vw 20px;
`;
