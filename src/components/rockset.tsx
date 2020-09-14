import * as React from 'react';
import rocksetConfigure from 'rockset';
import { Button, Textarea } from '../styled_components/index';

export const Rockset = () => {
  const rockset = rocksetConfigure(
    'GHLfQ2fiLz5NGgh6Wb6aIKT0vlb0PvIdBQkc5LaVeKZarR4J8Ulx5B2wxwXW2KOj',
    'https://api.rs2.usw2.rockset.com'
  );

  return (
    <div>
      <Button
        onClick={() => {
          rockset.documents.addDocuments('drinks', 'Coffee', {
            data: [{ roast: 'light' }],
          });
        }}
      >
        Write API
      </Button>
      {/* <Button
        onClick={() => {
          fetch('/.netlify/functions/coffee', {
            method: 'GET',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }).then(response =>
            response.text().then(data => setResponseData(data))
          );
        }}
      >
        Get Coffee
      </Button>
      <Button
        onClick={() => {
          fetch('/.netlify/functions/coffee', {
            method: 'POST',
            body: JSON.stringify('new FormData'),
          }).then(response => response.json());
        }}
      >
        Coffee
      </Button>

      <Button
        onClick={() => {
          fetch('/.netlify/functions/tea', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify([
              {
                type: 'green',
              },
            ]),
          });
        }}
      >
        Tea
      </Button> */}
    </div>
  );
};
