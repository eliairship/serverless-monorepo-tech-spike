import { APIGatewayProxyResult } from 'aws-lambda';

// exports.hello = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless v4.0! Your function executed successfully!',
//     }),
//   };
// };

exports.handler = async (): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully!',
    }),
  };
};
