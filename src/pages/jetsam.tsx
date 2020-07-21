import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import { pages } from '../constants/global';
import { JetsamQuery, PhotosQuery } from '../../graphql-types';

const Jetsam = (data: { data: JetsamQuery & PhotosQuery }) => (
  <Layout pageData={data.data} pageTitle={pages.JETSAM} />
);

export const result = graphql`
  query Jetsam {
    allMarkdownRemark(
      filter: { frontmatter: { date_posted: { gt: "2020" } } }
      sort: { order: DESC, fields: [frontmatter___date_posted] }
    ) {
      edges {
        node {
          frontmatter {
            date_posted(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;

export default Jetsam;
