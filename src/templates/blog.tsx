import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { Header } from '../components/index';
import { H1, H2, H3, Main } from '../styled_components/index';
import { MarkdownQuery } from '../../graphql-types';
import { global } from '../styles/global';
import './blog.css';

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

const ContentWrapper = styled.div`
  margin: auto;
  text-align: center;
`;

const MarkdownContent = styled(Main)`
  width: fit-content;
  margin: auto;
  font-weight: ${global.font_weights.thin};

  ol,
  ul {
    margin: 10px 0;
    padding: 0 15px;
  }
  strong {
    font-weight: ${global.font_weights.bold};
  }

  ul li {
    list-style-type: none;
  }
  li {
    margin-bottom: 10px;
  }
`;

export default function Template({ data }: { data: MarkdownQuery }) {
  const { frontmatter, html } = data.markdownRemark ?? {};

  return (
    frontmatter &&
    html && (
      <Wrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <meta content="Brian Liang" name="author" />
          <meta content="Brian Liang Website" name="descripton" />
          <meta content="Brian Liang | Software Engineer" property="og:title" />
          <meta content="brians.cafe" property="og:site_name" />
          <title>brian liang | {frontmatter.title}</title>
          <style>{`body { margin: 0 }`}</style>
        </Helmet>
        <Header pageTitle={frontmatter.title ?? ''} />
        <ContentWrapper>
          <H1>{frontmatter.title}</H1>
          <H2>{frontmatter.date_posted}</H2>
        </ContentWrapper>
        <MarkdownContent>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <H3>last updated: {frontmatter.last_updated}</H3>
        </MarkdownContent>
      </Wrapper>
    )
  );
}
export const pageQuery = graphql`
  query Markdown($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date_posted(formatString: "MMMM DD, YYYY")
        last_updated(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
