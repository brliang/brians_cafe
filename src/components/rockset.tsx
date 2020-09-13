import * as React from 'react';
import rocksetConfigure from 'rockset';
import { Button } from '../styled_components/index';

export const Rockset = () => {
  const rockset = rocksetConfigure(
    'GHLfQ2fiLz5NGgh6Wb6aIKT0vlb0PvIdBQkc5LaVeKZarR4J8Ulx5B2wxwXW2KOj',
    'https://api.rs2.usw2.rockset.com'
  );

  // const rockset = rocksetConfigure(
  //   'pIXuTPGcGQpYSNp2DIv3Z8kGPlaDz48ij2ogHRi4Nk5UzQQOK6sGZjS5lKwoJLqF',
  //   'https:/master-api.dev.rockset.com'
  // );

  // const rockset = rocksetConfigure(
  //   '5Xu2O6PkImZWKzgaNCFRsUxjWj3vgn64SS9OKWMbV0ndPHzbvcDWihadraqkOMoO',
  //   'https:/brian-api.dev.rockset.com'
  // );

  // const [starterData, setStarterData] = React.useState<QueryResponse>();
  // const [workspaces, setWorkspaces] = React.useState<
  //   ListQueryLambdasResponse
  // >();

  // const fetchData = async () =>
  //   await rockset.queryLambdas.executeQueryLambdaByTag(
  //     'commons',
  //     'ListingsAndReviews',
  //     'production'
  //   );

  return (
    <div>
      <Button
        onClick={() => {
          rockset.documents.addDocuments('commons', 'Coffee', {
            data: [{ roast: 'light' }],
          });
        }}
      >
        Write API
      </Button>

      <Button
        onClick={() => {
          rockset.collections.getCollection('commons', 'Coffee');
        }}
      >
        Get Collection
      </Button>
      <Button
        onClick={() => {
          rockset.queries.query({
            sql: { query: 'SELECT * from commons.trailers' },
          });
        }}
      >
        SELECT 5
      </Button>
      <Button
        onClick={() => {
          for (var i = 0; i < 105; i++) {
            rockset.users.createUser({
              email: `brian+${i}@rockset.com`,
              roles: ['admin'],
            });
          }
        }}
      >
        Create Users
      </Button>
      <Button
        onClick={() => {
          for (var i = 0; i < 105; i++) {
            rockset.users.deleteUser(`brian+${i}@rockset.com`);
          }
        }}
      >
        Delete Users
      </Button>
      <Button
        onClick={() => {
          for (var i = 0; i < 31; i++) {
            rockset.collections.createCollection('commons', {
              name: `brian${i}`,
            });
          }
        }}
      >
        Create Collections
      </Button>
      <Button
        onClick={() => {
          for (var i = 0; i < 31; i++) {
            rockset.collections.deleteCollection('commons', `brian${i}`);
          }
        }}
      >
        Delete Collections
      </Button>
      <Button
        onClick={() => {
          for (var i = 0; i < 51; i++) {
            rockset.queryLambdas.createQueryLambda('commons', {
              name: `brian${i}`,
              sql: { query: `select ${i}` },
            });
          }
        }}
      >
        Create Query Lambdas
      </Button>
      <Button
        onClick={() => {
          for (var i = 0; i < 105; i++) {
            rockset.queryLambdas.deleteQueryLambda('commons', `brian${i}`);
          }
        }}
      >
        Delete Query Lambdas
      </Button>
      <Button
        onClick={() => {
          rockset.workspaces.listWorkspaces();
        }}
      >
        List Workspaces
      </Button>

      <Button
        onClick={() => {
          rockset.collections.listCollections();
        }}
      >
        List Collections
      </Button>
    </div>
  );
};
