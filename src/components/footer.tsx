import * as React from 'react';
import styled from 'styled-components';

import { Contact } from './index';
import { H3 } from '../styled_components/index';
import { global } from '../styles/global';

const Coffee = require('../svg/coffee.svg');

export const Footer = () => (
  <StyledFooter>
    <Contact />
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <H3 style={{ margin: 0 }}>message me and I'll buy you a drink&nbsp;</H3>
      <Coffee style={{ maxHeight: global.svg.xs, maxWidth: global.svg.xs }} />
    </div>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  margin: 10px auto 0px;
  text-align: center;

  @media screen and (max-width: 800px) {
    margin-top: 5px;
  }
`;
