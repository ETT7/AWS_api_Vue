apiconst AWS = require('aws-sdk')

const client = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {
    let response = {}
    
    let body = event.body
    if(typeof(body) === "string") {
        body = JSON.parse(body)
    }
    
    const params = {
        TableName: "VueTaskApp",
        Item: body
    }
    
    try {
        await client.put(params).promise()
        response = {
            statusCode: 201
        }
    }catch (err) {
        response = {
            statusCode: 500,
            body: err
        }
    }
    
    return response
};
