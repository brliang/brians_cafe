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
      <H3 style={{ margin: 0 }}>msg me and i'll buy u&nbsp;</H3>
      <Coffee style={{ maxHeight: global.svg.xs, maxWidth: global.svg.xs }} />
    </div>
    <div>
      <H3 style={{ margin: 0 }}>pinky promise</H3>
    </div>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  margin: 20px auto 0px;
  text-align: center;
`;
