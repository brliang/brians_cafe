import * as React from 'react';
import { Button } from '../styled_components/index';
import { AnyCnameRecord } from 'dns';

export const RocksetGet = () => {
  const [responseData, setResponseData] = React.useState([]);

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
                  response
                    .text()
                    .then(data => setResponseData(JSON.parse(data)))
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
                  response
                    .text()
                    .then(data => setResponseData(JSON.parse(data)))
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
                  response
                    .text()
                    .then(data => setResponseData(JSON.parse(data)))
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
          whiteSpace: 'nowrap',
          overflow: 'auto',
          marginTop: 10,
        }}
      >
        {responseData.map(row => (
          <div style={{ marginBottom: 5 }}>
            {Object.entries(row).map(field => (
              <span style={{ marginRight: 20 }}>
                {field[0]}:
                <span style={{ fontWeight: 100, marginLeft: 5 }}>
                  {field[1] as any}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
