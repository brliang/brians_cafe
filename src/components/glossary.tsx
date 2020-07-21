import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { Post } from './index';
import { JetsamQuery, PhotosQuery } from '../../graphql-types';
import { Ul, Li } from '../styled_components/index';

export const JetsamGlossary = ({ pageData }: { pageData: JetsamQuery }) => (
  <Ul style={{ margin: 'auto', textAlign: 'center' }}>
    {pageData.allMarkdownRemark.edges.map(edge => (
      <Li key={edge?.node?.frontmatter?.title ?? ''}>
        <Post
          date_posted={edge?.node?.frontmatter?.date_posted ?? ''}
          path={edge?.node?.frontmatter?.path ?? ''}
          title={edge?.node?.frontmatter?.title ?? ''}
        />
      </Li>
    ))}
  </Ul>
);

export const PhotosGlossary = ({ pageData }: { pageData: PhotosQuery }) => (
  <PhotosWrapper>
    {pageData.allFile.edges.map(edge => (
      <Img
        fluid={edge?.node?.childImageSharp?.fluid as any}
        style={{ pageBreakInside: 'avoid' }}
      />
    ))}
  </PhotosWrapper>
);

const PhotosWrapper = styled.div`
  column-count: 3;
  column-gap: 20px;
  margin: 0 auto;
  max-width: 85vw;

  .gatsby-image-wrapper {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 800px) {
    column-count: 2;
    column-gap: 10px;

    .gatsby-image-wrapper {
      margin-bottom: 10px;
    }
  }
`;
