import React from 'react';
import { Helmet } from 'react-helmet';

import { Header, Body } from './index';
import { pages } from '../constants/global';
import { JetsamQuery, PhotosQuery } from '../../graphql-types';
import styled from 'styled-components';
import { global } from '../styles/global';

export const Layout = ({
  pageData,
  pageTitle,
}: {
  pageData?: JetsamQuery & PhotosQuery;
  pageTitle: string;
}) => (
  <Wrapper>
    <Helmet>
      <meta charSet="utf-8" />
      <meta content="Brian Liang" name="author" />
      <meta content="Brian Liang Website" name="descripton" />
      <meta content="Brian Liang | Software Engineer" property="og:title" />
      <meta content="brians.cafe" property="og:site_name" />
      <style>{`body { margin: 0 }`}</style>
      <title>brian liang | {pageTitle}</title>
    </Helmet>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i&display=swap"
    />
    <Header pageTitle={pageTitle} />
    <Body pageData={pageData} pageTitle={pageTitle} />
  </Wrapper>
);

const Wrapper = styled.div`
  min-height: 100vh;
  font-family: ${global.fonts.josefin_sans};
  color: ${global.colors.primary_font};
  background-color: ${global.colors.background};

  svg g {
    fill: ${global.colors.primary_font};
  }

  @media (prefers-color-scheme: dark) {
    color: ${global.colors.primary_font_dark};
    background-color: ${global.colors.background_dark};

    svg g {
      fill: ${global.colors.primary_font_dark};
    }
  }
`;
