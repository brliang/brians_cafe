import React from 'react';
import styled from 'styled-components';

import { JetsamQuery, PhotosQuery } from '../../graphql-types';
import { pages } from '../constants/global';
import { global } from '../styles/global';
import { JetsamGlossary, PhotosGlossary, Rockset, Footer } from './index';
import {
  H1,
  Main,
  A,
  Li,
  Strong,
  Text,
  GatsbyLink,
  Ul,
} from '../styled_components/index';

export const Body = ({
  pageData,
  pageTitle,
}: {
  pageData?: JetsamQuery & PhotosQuery;
  pageTitle: string;
}) => {
  switch (pageTitle) {
    case pages.HOME:
      return <Home />;
    case pages.PHOTOS:
      return pageData ? <PhotosGlossary pageData={pageData} /> : null;
    case pages.JETSAM:
      return pageData ? <JetsamGlossary pageData={pageData} /> : null;
    default:
      return <></>;
  }
};

const Brian = require('../svg/brian.svg');

const Home = () => (
  <HomeWrapper>
    <Text
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <Brian style={{ maxHeight: global.svg.m, maxWidth: global.svg.m }} />
        <H1>Brian</H1>
      </div>
      <Main style={{ maxWidth: 360 }}>
        <div style={{ marginBottom: 10 }}>
          <Strong>currently:</Strong> 👨🏻‍💻 building product @{' '}
          <A
            id="rockset"
            href="https://www.rockset.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            rockset
          </A>
        </div>
        <Strong>so far: </Strong>
        <Ul>
          <Li>e.b., nj ⇁ evanston, il ⇁ san mateo, ca ⇁ ?</Li>
          {/*<Li>
            🤳🏻 messenger for businesses at{' '}
            <A
              id="facebook"
              href="https://www.facebook.com/brianwliang"
              rel="noopener noreferrer"
              target="_blank"
            >
              facebook
            </A>
          </Li>
          <Li>
            📄 recruiting software at{' '}
            <A
              id="linkedin"
              href="https://www.linkedin.com/in/brian-liang"
              rel="noopener noreferrer"
              target="_blank"
            >
              linkedIn
            </A>
          </Li>
          <Li>
            🏨 hotels at{' '}
            <A
              id="expedia"
              href="https://www.airbnb.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              expedia
            </A>
          </Li>/*}
        </Ul>
        {/* This site shelters an eclectic assortment of my{' '}
        <GatsbyLink to="/jetsam">
          <Strong>thoughts</Strong>
        </GatsbyLink>{' '}
        and{' '}
        <GatsbyLink to="/photos">
          <Strong>photos</Strong>
        </GatsbyLink>
        . 
        <br /> <br />*/}
        Feel free to send a message! I'll respond ASAP 🙋🏻‍♂️. Meeting new people is
        always fun 👋.
      </Main>
      {/* <Rockset /> */}
      <Footer />
    </Text>
  </HomeWrapper>
);

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  padding: 50px 0px;
  box-sizing: border-box;

  #rockset {
    color: ${global.colors.rockset_primary_color};
  }

  #facebook {
    color: ${global.colors.facebook_primary_color};
  }

  #linkedin {
    color: ${global.colors.linkedin_primary_color};
  }

  #expedia {
    color: ${global.colors.expedia_primary_color};
  }

  @media (prefers-color-scheme: dark) {
    #rockset {
      color: ${global.colors.rockset_secondary_color};
    }

    #facebook {
      color: ${global.colors.facebook_secondary_color};
    }

    #linkedin {
      color: ${global.colors.linkedin_secondary_color};
    }

    #expedia {
      color: ${global.colors.expedia_secondary_color};
    }
  }

  @media screen and (max-width: 800px) {
    padding: 10px 10px;
  }
`;
