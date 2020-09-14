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
      <Input
        name="email"
        placeholder="email"
        autoComplete="off"
        required={true}
        value={email}
        onChange={event => {
          setEmail(event.target.value);
          setRequestData({ ...requestData, email: event.target.value });
        }}
        style={{ marginBottom: 10 }}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 300,
            }}
          >
            <Button
              onClick={() => {
                key !== '' &&
                  value !== '' &&
                  (setRequestData({ ...requestData, [key]: value }),
                  setKey(''),
                  setValue(''));
              }}
              style={{ marginBottom: 10 }}
            >
              Append
            </Button>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Input
                name="key"
                placeholder="key"
                autoComplete="off"
                required={true}
                value={key}
                onChange={event => {
                  setKey(event.target.value);
                }}
                style={{ width: '45%' }}
              />
              <Input
                name="value"
                placeholder="value"
                autoComplete="off"
                required={true}
                value={value}
                onChange={event => {
                  setValue(event.target.value);
                }}
                style={{ width: '45%' }}
              />
            </div>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}
          >
            <Button
              onClick={() => {
                email !== ''
                  ? fetch('/.netlify/functions/coffee', {
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
                          key => key !== 'email' && delete requestData[key]
                        );
                      })
                      .catch()
                  : alert('Email please :)');
              }}
              style={{ marginBottom: 10 }}
            >
              Submit Coffee Preferences
            </Button>
            <Button
              onClick={() => {
                email !== ''
                  ? fetch('/.netlify/functions/tea', {
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
                          key => key !== 'email' && delete requestData[key]
                        );
                      })
                      .catch()
                  : alert('Email please :)');
              }}
            >
              Submit Tea Preferences
            </Button>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 600, margin: 10, justifyContent: 'center' }}>
        {Object.entries(requestData).map(entry => (
          <div>
            {entry[0]}
            <span style={{ fontWeight: 100, marginLeft: 10 }}>{entry[1]}</span>
          </div>
        ))}
      </div>
      {responseData}
    </>
  );
};
