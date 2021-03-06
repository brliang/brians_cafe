import React from 'react';
import styled from 'styled-components';

import { JetsamQuery, PhotosQuery } from '../../graphql-types';
import { pages } from '../constants/global';
import { global } from '../styles/global';
import {
  JetsamGlossary,
  PhotosGlossary,
  Rockset,
  RocksetGet,
  RocksetQuery,
  RocksetPost,
  Footer,
} from './index';
import {
  Button,
  H1,
  Main,
  A,
  Li,
  Strong,
  Text,
  GatsbyLink,
  Ul,
  Tabs,
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

const Home = () => {
  const [activeTab, setActiveTab] = React.useState<
    'internal' | 'get' | 'post' | 'query'
  >('post');
  const [contact, setContact] = React.useState(false);

  return (
    <HomeWrapper>
      <Text
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', margin: 10 }}>
          {/* <Brian style={{ maxHeight: global.svg.m, maxWidth: global.svg.m }} /> */}
          <H1>Hi I'm Brian</H1>
          {!contact && (
            <div
              onClick={() => setContact(true)}
              style={{ cursor: 'pointer', fontSize: 40, margin: 10 }}
            >
              👋
            </div>
          )}
          {contact && (
            <div
              onClick={() => setContact(false)}
              style={{ cursor: 'pointer', fontSize: 40, margin: 10 }}
            >
              👨🏻‍💻
            </div>
          )}
        </div>
        <Main style={{ maxWidth: 360 }}>
          <div>
            <Strong>currently:</Strong> building @{' '}
            <A
              id="rockset"
              href="https://www.rockset.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              rockset
            </A>
          </div>
          {/* <Strong>so far: </Strong> */}
          <Ul>
            <Li>this page is... a WIP</Li>
            <Li>my attention span these days 🤤</Li>
            {/* <Li>nj ⇁ illinois ⇁ san mateo, ca ⇁ 🤭 ?</Li> */}
            {/* <Li>
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
          </Li> */}
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
        <br /> <br /> */}
          {/* hello 🙋🏻‍♂️ */}
        </Main>
      </Text>

      {contact ? (
        <Footer />
      ) : (
        <>
          <Tabs
            selectedTab={activeTab}
            setSelectedTab={setActiveTab}
            tabs={['post', 'get', 'query']}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: 20,
              width: 140,
            }}
          />
          {activeTab === 'post' && <RocksetPost />}
          {activeTab === 'get' && <RocksetGet />}
          {activeTab === 'query' && <RocksetQuery />}
          {/* {activeTab === 'internal' && <Rockset />} */}
        </>
      )}
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  min-width: 320px;
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
