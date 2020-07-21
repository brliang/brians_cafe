import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import { pages } from '../constants/global';

import { JetsamQuery, PhotosQuery } from '../../graphql-types';

const Photos = (data: { data: JetsamQuery & PhotosQuery }) => (
  <Layout pageData={data.data} pageTitle={pages.PHOTOS} />
);

export const query = graphql`
  query Photos {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        sourceInstanceName: { eq: "photos" }
      }
      sort: { order: DESC, fields: [childImageSharp___fluid___originalName] }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Photos;
