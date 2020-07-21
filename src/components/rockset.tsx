import * as React from 'react';
import rocksetConfigure from 'rockset';
import {
  QueryResponse,
  ListWorkspacesResponse,
} from 'rockset/dist/codegen/api';

export const Rockset = () => {
  const rockset = rocksetConfigure(
    '9p3z1IuqfxPbV64nUbItIJJZXjSJCVRRYAALHd3oh5Wx87E7sC9uyCnZaYsPHYts',
    'https://api.rs2.usw2.rockset.com'
  );

  const [starterData, setStarterData] = React.useState<QueryResponse>();
  const [workspaces, setWorkspaces] = React.useState<ListWorkspacesResponse>();

  const fetchData = async () =>
    await rockset.queryLambdas.executeQueryLambdaByTag(
      'commons',
      'ListingsAndReviews',
      'production'
    );

  React.useEffect(() => {
    fetchData().then(a => {
      setStarterData(a);
      console.log(a);
    });
    rockset.workspaces.listWorkspaces().then(data => setWorkspaces(data));
  }, []);

  return (
    <div>
      {' '}
      {starterData?.results?.length}
      {starterData?.results?.map(row => {
        console.log(row);
        return Object.entries(row).map((key, value) => (
          <div>{`${key}${value}`}</div>
        ));
      })}
    </div>
  );
};
