import json
import boto3



def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('VueTaskApp')
    
    
    data = table.scan(Limit=100)
    print("this is type:",type(data))
    
    return {
        'statusCode': 200,
        'headers': {"Content-Type": "application/json"},
        'body': json.dumps(data['Items'])
    }