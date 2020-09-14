import { Handler, APIGatewayProxyEvent } from 'aws-lambda';
import rocksetConfigure from 'rockset';

const { ROCKSET } = process.env;

export const handler: Handler = async (event: APIGatewayProxyEvent) => {
  const rockset = rocksetConfigure(
    ROCKSET as string,
    'https://api.rs2.usw2.rockset.com'
  );
  if (event.httpMethod === 'GET') {
    return await rockset.queryLambdas
      .executeQueryLambdaByTag('drinks', 'Coffee', 'latest')
      .then(data => ({
        statusCode: 200,
        body: JSON.stringify(data.results ?? []),
      }))
      .catch();
  } else {
    return await rockset.documents
      .addDocuments('drinks', 'Coffee', {
        data: [JSON.parse(event.body ?? '')],
      })
      .then(data => ({
        statusCode: 200,
        body: JSON.stringify(data?.data ?? []),
      }))
      .catch();
  }
};
