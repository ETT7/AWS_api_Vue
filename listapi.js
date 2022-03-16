const AWS = require('aws-sdk')

const client = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {
    let response = {}
    let params = {TableName: "VueTodoApp"
    };
    
    try {
        let data = await client.scan(params).promise();
        response = {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data.Items)
        }
    }catch (err) {
        response = {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json"
            },
            body: err.toString()
        }
    }
    
    return response
};
