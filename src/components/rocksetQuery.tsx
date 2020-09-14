import * as React from 'react';
import { Button, Textarea } from '../styled_components/index';

export const RocksetQuery = () => {
  const [responseData, setResponseData] = React.useState<any[]>();
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
                      setResponseData(JSON.parse(data));
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
          whiteSpace: 'nowrap',
          overflow: 'auto',
          marginTop: 10,
        }}
      >
        {err
          ? err
          : (responseData as any)?.errorMessage
          ? "You should visit Rockset's actual console to learn SQL :)"
          : responseData?.map(row => (
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
