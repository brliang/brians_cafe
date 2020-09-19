import * as React from 'react';
import { Button, Textarea } from '../styled_components/index';

export const RocksetQuery = () => {
  const [responseData, setResponseData] = React.useState<string>();
  const [requestData, setRequestData] = React.useState<string>(
    'SELECT * from drinks.Coffee c inner join drinks.Tea t on c.email = t.email'
  );
  const [err, setErr] = React.useState<string>();

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '30%',
          minWidth: 320,
        }}
      >
        <Textarea
          value={requestData}
          placeholder="SELECT * from drinks.Coffee c inner join drinks.Tea t on c.email = t.email"
          onChange={event => {
            setRequestData(event.target.value);
          }}
        />
        <Button
          onClick={() => {
            setErr(undefined);
            fetch('/.netlify/functions/query', {
              method: 'POST',
              body: requestData,
            })
              .then(response => {
                setRequestData('');
                response
                  .text()
                  .then(data => {
                    try {
                      JSON.parse(data);
                      setResponseData(data);
                    } catch (e) {
                      setErr(data);
                    }
                  })
                  .catch();
              })
              .catch();
          }}
        >
          Query
        </Button>
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
        {err && 'Bad SQL probably'}
        <pre>
          {responseData &&
            !err &&
            JSON.stringify(JSON.parse(responseData), null, 4)}
        </pre>
      </div>
    </>
  );
};
