---
sidebar_position: 5
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Delete Answer

<HttpMethod method="DELETE" /> `/v1/answer/:answerId`

Delete a specific answer by its ID.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "answerId",
      type: "String",
      required: true,
      location: "path",
      description: "ID of the answer to delete"
    }
  ]}
/>

## Example Request

<CodeTabs examples={{
  "curl": `curl -X DELETE 'https://api.ximpli-me.com/v1/answer/042f9927d2e5' \\
-H 'Authorization: Bearer YOUR_API_KEY'`,

  "go": `package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    client := &http.Client{}
    req, err := http.NewRequest("DELETE", "https://api.ximpli-me.com/v1/answer/042f9927d2e5", nil)
    if err != nil {
        panic(err)
    }

    req.Header.Add("Authorization", "Bearer YOUR_API_KEY")

    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}`,

  "python": `import requests

url = "https://api.ximpli-me.com/v1/answer/042f9927d2e5"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.delete(url, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const config = {
    headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
};

axios.delete('https://api.ximpli-me.com/v1/answer/042f9927d2e5', config)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$response = $client->delete('https://api.ximpli-me.com/v1/answer/042f9927d2e5', [
    'headers' => [
        'Authorization' => 'Bearer YOUR_API_KEY'
    ]
]);

echo $response->getBody();`
}} />

## Example Success Response

```json
{
    "statusCode": 200,
    "message": "Answer deleted successfully.",
    "data": {
        "_id": "67713a2ec5bc95af3d19c47f",
        "eformId": "1735467904042d4a92f55cc6f",
        "answerId": "042f9927d2e5",
        "answers": [
            {
                "questionId": "1db26599",
                "questionTitle": "What is your name?",
                "questionDescription": null,
                "questionType": "text",
                "answerQuestion": "dfsfdsdf",
                "selectedOption": null,
                "fileDetails": {
                    "url": "",
                    "fileName": "",
                    "fileType": ""
                }
            },
            {
                "questionId": "6b0fd1b4",
                "questionTitle": "What is your phone number?",
                "questionDescription": null,
                "questionType": "number",
                "answerQuestion": "234234234",
                "selectedOption": null,
                "fileDetails": {
                    "url": "",
                    "fileName": "",
                    "fileType": ""
                }
            },
            {
                "questionId": "58cd8a97",
                "questionTitle": "Select your gender",
                "questionDescription": null,
                "questionType": "radio_button",
                "answerQuestion": "",
                "selectedOption": {
                    "optionId": "9438efb7",
                    "option": "Male"
                },
                "fileDetails": {
                    "url": "",
                    "fileName": "",
                    "fileType": ""
                }
            }
        ],
        "createdAt": "2024-12-29T12:01:50.220Z",
        "updatedAt": "2024-12-29T12:28:54.055Z"
    }
}
```

## Error Response

```json
{
    "statusCode": 404,
    "message": "Answer not found"
}
``` 