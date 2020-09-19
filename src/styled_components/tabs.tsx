import React, { CSSProperties } from 'react';
import styled from 'styled-components';

import { global } from '../styles/global';

const { colors } = global;

const Tab = styled.button<{ selected: boolean }>`
  background-color: ${props =>
    props.selected ? colors.nav_cta_hover : colors.nav_cta};
  font-family: ${global.fonts.josefin_sans};
  border: none;
  color: ${colors.primary_font};
  padding: 5px;
  cursor: pointer;

  :hover,
  :active,
  :focus {
    background-color: ${colors.nav_cta_hover};
  }
`;

const TabHolder = styled.div`
  button:first-child {
    border-radius: 16px 0px 0px 16px;
  }
  button:last-child {
    border-radius: 0px 16px 16px 0px;
  }
`;

export const Tabs = ({
  selectedTab,
  setSelectedTab,
  tabs,
  style,
}: {
  selectedTab: string;
  setSelectedTab: Function;
  tabs: string[];
  style?: CSSProperties;
}) => (
  <TabHolder style={style}>
    {tabs.map(tab => (
      <Tab
        selected={tab === selectedTab}
        key={tab}
        onClick={() => {
          setSelectedTab(tab);
        }}
      >
        {tab}
      </Tab>
    ))}
  </TabHolder>
);
