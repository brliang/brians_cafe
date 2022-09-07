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
          <H1 style={{ marginRight: -5 }}>Hi I'm Brian</H1>
          <Brian style={{ maxHeight: global.svg.m, maxWidth: global.svg.m }} />
        </div>
        <Main style={{ maxWidth: 360 }}>
          <div>
            <Strong>currently:</Strong> making bowls @{' '}
            <A
              id="clay"
              href="https://www.clay.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              clay
            </A>
          </div>
          {/* <Strong>so far: </Strong> */}
          <Ul>
            <Li>feel free to send me an <A href="mailto:bliang529@gmail.com">email</A></Li>
            <Li>or grab some of my{' '}
              <A
                id="meeting"
                href="https://calendly.com/brian_liang/30min"
                rel="noopener noreferrer"
                target="_blank"
              >
                time
              </A>
            </Li>
          </Ul>
        </Main>
      </Text>
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

  #clay {
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
    #clay {
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
