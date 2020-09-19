import * as React from 'react';
import { Button, Input } from '../styled_components/index';

export const RocksetPost = () => {
  const [responseData, setResponseData] = React.useState<string>();
  const [email, setEmail] = React.useState<string>('');
  const [key, setKey] = React.useState<string>('');
  const [value, setValue] = React.useState<string>('');
  const [requestData, setRequestData] = React.useState<Record<string, any>>({});

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Input
            name="key"
            placeholder="key (roast? type?)"
            autoComplete="off"
            required={true}
            value={key}
            onChange={event => {
              setKey(event.target.value);
            }}
            style={{ width: 120, marginRight: 10 }}
          />
          <Input
            name="value"
            placeholder="value (dark? green?)"
            autoComplete="off"
            required={true}
            value={value}
            onChange={event => {
              setValue(event.target.value);
            }}
            style={{ width: 120, marginRight: 10 }}
          />
          <Button
            onClick={() => {
              setRequestData({ ...requestData, [key]: value }),
                setKey(''),
                setValue('');
            }}
            style={{
              width: 'fit-content',
              lineHeight: '10px',
              borderRadius: 10,
            }}
            disabled={key === '' || value === ''}
          >
            +
          </Button>
        </div>
        <div
          style={{ maxWidth: 400, marginLeft: 20, justifyContent: 'center' }}
        >
          <pre style={{ overflow: 'auto' }}>
            {JSON.stringify(requestData, null, 4)}
          </pre>
        </div>
      </div>
      <div style={{ display: 'flex', marginBottom: 10 }}>
        <Button
          onClick={() => {
            fetch('/.netlify/functions/coffee', {
              method: 'POST',
              headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(requestData),
            })
              .then(response => {
                response.text().then(data => setResponseData(data));
              })
              .finally(() => {
                Object.keys(requestData).forEach(
                  key => delete requestData[key]
                );
              })
              .catch();
          }}
          disabled={Object.keys(requestData).length === 0}
          style={{ marginRight: 10 }}
        >
          Coffee
        </Button>
        <Button
          onClick={() => {
            fetch('/.netlify/functions/tea', {
              method: 'POST',
              headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(requestData),
            })
              .then(response => {
                response.text().then(data => setResponseData(data));
              })
              .finally(() => {
                Object.keys(requestData).forEach(
                  key => delete requestData[key]
                );
              })
              .catch();
          }}
          disabled={Object.keys(requestData).length === 0}
        >
          Tea
        </Button>
      </div>
      <pre>
        {responseData && JSON.stringify(JSON.parse(responseData), null, 4)}
      </pre>
    </>
  );
};
