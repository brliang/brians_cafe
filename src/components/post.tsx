import React from 'react';

import { H2, H3, GatsbyLink } from '../styled_components/index';

export const Post = ({
  date_posted,
  path,
  title,
}: {
  date_posted: string;
  path: string;
  title: string;
}) => (
  <GatsbyLink to={path}>
    <H2>
      <GatsbyLink to={path}>{title}</GatsbyLink>
    </H2>
    <H3>{date_posted}</H3>
  </GatsbyLink>
);
