import { Handler, APIGatewayProxyEvent } from 'aws-lambda';
import rocksetConfigure from 'rockset';

const { ROCKSET } = process.env;

export const handler: Handler = async (event: APIGatewayProxyEvent) => {
  const rockset = rocksetConfigure(
    ROCKSET as string,
    'https://api.rs2.usw2.rockset.com'
  );
  return await rockset.queries
    .query({ sql: { query: event.body ?? '' } })
    .then(data => ({
      statusCode: 200,
      body: JSON.stringify(data.results ?? []),
    }))
    .catch();
};
