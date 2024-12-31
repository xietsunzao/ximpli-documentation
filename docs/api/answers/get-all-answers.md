---
sidebar_position: 1
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import ResponseTable from '@site/src/components/ResponseTable';

# Get All Answers

<HttpMethod method="GET" /> `/v1/answers`

Get all eform answers across all eforms.

## Example Request

<CodeTabs examples={{
  "curl": `curl -X GET 'https://api.ximpli-me.com/v1/answers' \\
-H 'Authorization: Bearer YOUR_API_KEY'`,

  "go": `package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    client := &http.Client{}
    req, err := http.NewRequest("GET", "https://api.ximpli-me.com/v1/answers", nil)
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

url = "https://api.ximpli-me.com/v1/answers"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const config = {
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
};

axios.get('https://api.ximpli-me.com/v1/answers', config)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$response = $client->get('https://api.ximpli-me.com/v1/answers', [
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
      description: "HTTP status code",
      example: 200
    },
    {
      name: "message",
      type: "String", 
      description: "Response message",
      example: "Answers fetched successfully."
    },
    {
      name: "data",
      type: "Array",
      description: "Array of answer objects",
      properties: {
        _id: {
          type: "string",
          description: "Unique identifier for the answer"
        },
        eformId: {
          type: "string",
          description: "ID of the eform"
        },
        answerId: {
          type: "string",
          description: "Unique identifier for this submission"
        },
        answers: {
          type: "array",
          description: "Array of answers to individual questions",
          properties: {
            questionId: {
              type: "string",
              description: "ID of the question"
            },
            questionTitle: {
              type: "string",
              description: "Title of the question"
            },
            questionDescription: {
              type: "string|null",
              description: "Description of the question"
            },
            questionType: {
              type: "string",
              description: "Type of question (text, number, radio_button, etc)"
            },
            answerQuestion: {
              type: "string",
              description: "Answer text for text/number questions"
            },
            selectedOption: {
              type: "object|null",
              description: "Selected option for radio/select questions",
              properties: {
                optionId: {
                  type: "string",
                  description: "ID of selected option"
                },
                option: {
                  type: "string", 
                  description: "Text of selected option"
                }
              }
            },
            multipleAnswers: {
              type: "array",
              description: "Array of answers for multiple choice questions"
            }
          }
        },
        createdAt: {
          type: "string",
          description: "Creation timestamp"
        },
        updatedAt: {
          type: "string",
          description: "Last update timestamp"
        }
      },
      example: {
        "_id": "67713a2ec5bc95af3d19c47f",
        "eformId": "1735467904042d4a92f55cc6f",
        "answerId": "042f9927d2e5",
        "answers": [{
          "questionId": "1db26599",
          "questionTitle": "What is your name?",
          "questionDescription": null,
          "questionType": "text",
          "answerQuestion": "tefffst",
          "selectedOption": null,
          "multipleAnswers": []
        }],
        "createdAt": "2024-12-29T12:01:50.220Z",
        "updatedAt": "2024-12-29T12:01:50.220Z"
      }
    }
  ]}
/>

## Example Response

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