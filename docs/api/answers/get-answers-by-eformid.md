---
sidebar_position: 2
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Get Answers by Eform ID

<HttpMethod method="GET" /> `/v1/answers/:eformId`

Get all answers for a specific eform.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "eformId",
      type: "String",
      required: true,
      location: "path",
      description: "ID of the eform to get answers for"
    }
  ]}
/>

## Example Request

<CodeTabs examples={{
  "curl": `curl -X GET 'https://api.ximpli-me.com/v1/answers/1735467904042d4a92f55cc6f' \\
-H 'Authorization: Bearer YOUR_API_KEY'`,

  "go": `package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    client := &http.Client{}
    req, err := http.NewRequest("GET", "https://api.ximpli-me.com/v1/answers/1735467904042d4a92f55cc6f", nil)
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

url = "https://api.ximpli-me.com/v1/answers/1735467904042d4a92f55cc6f"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const config = {
    headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
};

axios.get('https://api.ximpli-me.com/v1/answers/1735467904042d4a92f55cc6f', config)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$response = $client->get('https://api.ximpli-me.com/v1/answers/1735467904042d4a92f55cc6f', [
    'headers' => [
        'Authorization' => 'Bearer YOUR_API_KEY'
    ]
]);

echo $response->getBody();`
}} />

## Response Parameters

<ResponseTable
  parameters={[
    {
      name: "statusCode",
      type: "Number",
      description: "HTTP status code of the response"
    },
    {
      name: "message",
      type: "String",
      description: "Success/error message"
    },
    {
      name: "data",
      type: "Array",
      description: "Array of answer objects",
      properties: {
        _id: {
          type: "String",
          description: "Internal ID of the submission"
        },
        eformId: {
          type: "String",
          description: "ID of the eform"
        },
        answerId: {
          type: "String",
          description: "Unique identifier for this submission"
        },
        answers: {
          type: "Array",
          description: "Array of answers to individual questions",
          properties: {
            questionId: {
              type: "String",
              description: "ID of the question"
            },
            questionTitle: {
              type: "String",
              description: "Title of the question"
            },
            questionDescription: {
              type: "String|null",
              description: "Description of the question"
            },
            questionType: {
              type: "String",
              description: "Type of question (text, number, radio_button, etc)"
            },
            answerQuestion: {
              type: "String",
              description: "Answer text for text/number questions"
            },
            selectedOption: {
              type: "Object|null",
              description: "Selected option for radio/select questions",
              properties: {
                optionId: {
                  type: "String",
                  description: "ID of selected option"
                },
                option: {
                  type: "String",
                  description: "Text of selected option"
                }
              }
            },
            multipleAnswers: {
              type: "Array",
              description: "Array of answers for multiple choice questions"
            }
          }
        },
        createdAt: {
          type: "String",
          description: "Creation timestamp"
        },
        updatedAt: {
          type: "String",
          description: "Last update timestamp"
        }
      }
    }
  ]}
/>

## Example Success Response

```json
{
    "statusCode": 200,
    "message": "Answers fetched successfully.",
    "data": [
        {
            "_id": "67713a2ec5bc95af3d19c47f",
            "eformId": "1735467904042d4a92f55cc6f",
            "answerId": "042f9927d2e5",
            "answers": [
                {
                    "questionId": "1db26599",
                    "questionTitle": "What is your name?",
                    "questionDescription": null,
                    "questionType": "text",
                    "answerQuestion": "tefffst",
                    "selectedOption": null,
                    "multipleAnswers": []
                },
                {
                    "questionId": "6b0fd1b4",
                    "questionTitle": "What is your phone number?",
                    "questionDescription": null,
                    "questionType": "number",
                    "answerQuestion": "23432334324",
                    "selectedOption": null,
                    "multipleAnswers": []
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
                    "multipleAnswers": []
                }
            ],
            "createdAt": "2024-12-29T12:01:50.220Z",
            "updatedAt": "2024-12-29T12:01:50.220Z"
        }
    ]
}
```

## Error Response

```json
{
    "statusCode": 404,
    "message": "Eform not found"
}
``` 