import * as React from 'react';
import { Button } from '../styled_components/index';
import { AnyCnameRecord } from 'dns';

export const RocksetGet = () => {
  const [responseData, setResponseData] = React.useState<string>();

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 320,
            justifyContent: 'space-between',
          }}
        >
          <Button
            onClick={() => {
              fetch('/.netlify/functions/coffee', {
                method: 'GET',
              })
                .then(response =>
                  response.text().then(data => setResponseData(data))
                )
                .catch();
            }}
          >
            Get Coffee
          </Button>
          <Button
            onClick={() => {
              fetch('/.netlify/functions/tea', {
                method: 'GET',
              })
                .then(response =>
                  response.text().then(data => setResponseData(data))
                )
                .catch();
            }}
          >
            Get Tea
          </Button>
          <Button
            onClick={() => {
              fetch('/.netlify/functions/results', {
                method: 'GET',
              })
                .then(response =>
                  response.text().then(data => setResponseData(data))
                )
                .catch();
            }}
          >
            Coffee Join Tea on Email
          </Button>
        </div>
      </div>
      <div
        style={{
          minWidth: 350,
          maxWidth: '80%',
          maxHeight: '40%',
          whiteSpace: 'nowrap',
          overflow: 'auto',
          marginTop: 10,
        }}
      >
        <pre>
          {responseData && JSON.stringify(JSON.parse(responseData), null, 4)}
        </pre>
      </div>
    </>
  );
};
