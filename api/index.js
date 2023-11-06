import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);


export const handler = async (event, context) => {
  console.log(event);

  const headers = event.headers;
  const body = JSON.parse(event.body);

  const command = new PutCommand({
    TableName: "insta-anonymous-messages",
    Item: {
      id: uuidv4(),
      message: body.message,
      headers: headers,
      timestamp: new Date().toISOString()
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return {
    "statusCode": 200,
    "body": "Inserted Message",
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    },
  };
};