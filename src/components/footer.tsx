import * as React from 'react';
import styled from 'styled-components';

import { Contact } from './index';
import { H3 } from '../styled_components/index';
import { global } from '../styles/global';

const Coffee = require('../svg/coffee.svg');

export const Footer = () => (
  <StyledFooter>
    <Contact />
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <H3>message me for free&nbsp;</H3>
      <Coffee style={{ maxHeight: global.svg.xs, maxWidth: global.svg.xs }} />
    </div>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  margin: 20px auto 0px;
  text-align: center;
`;
