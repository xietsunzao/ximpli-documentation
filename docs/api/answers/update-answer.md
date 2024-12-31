---
sidebar_position: 4
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Update Answer

<HttpMethod method="PUT" /> `/v1/answer/update/:eformId`

Update an existing answer for a specific eform.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "eformId",
      type: "String",
      required: true,
      location: "path",
      description: "ID of the eform containing the answer"
    },
    {
      name: "answerId",
      type: "String",
      required: true,
      description: "ID of the answer to update"
    },
    {
      name: "answers",
      type: "Array",
      required: true,
      description: "Array of answer objects",
      properties: {
        questionId: {
          type: "String",
          required: true,
          description: "ID of the question being answered"
        },
        answerQuestion: {
          type: "String",
          required: false,
          description: "Text answer for text/number questions"
        },
        selectedOption: {
          type: "Object",
          required: false,
          description: "Selected option for choice-based questions",
          properties: {
            optionId: {
              type: "String",
              required: true,
              description: "ID of the selected option"
            },
            option: {
              type: "String",
              required: true,
              description: "Text of the selected option"
            }
          }
        }
      }
    }
  ]}
/>

## Example Request

<CodeTabs examples={{
  "curl": `curl -X PUT 'https://api.ximpli-me.com/v1/answer/update/1735467904042d4a92f55cc6f' \\
-H 'Authorization: Bearer YOUR_API_KEY' \\
-H 'Content-Type: application/json' \\
-d '{
    "answerId": "042f9927d2e5",
    "answers": [
        {
            "questionId": "1db26599",
            "answerQuestion": "dfsfdsdf"
        },
        {
            "questionId": "6b0fd1b4",
            "answerQuestion": "234234234"
        },
        {
            "questionId": "58cd8a97",
            "selectedOption": {
                "optionId": "9438efb7",
                "option": "Male"
            }
        }
    ]
}'`,

  "go": `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    data := map[string]interface{}{
        "answerId": "042f9927d2e5",
        "answers": []map[string]interface{}{
            {
                "questionId": "1db26599",
                "answerQuestion": "dfsfdsdf",
            },
            {
                "questionId": "6b0fd1b4",
                "answerQuestion": "234234234",
            },
            {
                "questionId": "58cd8a97",
                "selectedOption": map[string]string{
                    "optionId": "9438efb7",
                    "option": "Male",
                },
            },
        },
    }

    jsonData, err := json.Marshal(data)
    if err != nil {
        panic(err)
    }

    client := &http.Client{}
    req, err := http.NewRequest("PUT", "https://api.ximpli-me.com/v1/answer/update/1735467904042d4a92f55cc6f", bytes.NewBuffer(jsonData))
    if err != nil {
        panic(err)
    }

    req.Header.Add("Authorization", "Bearer YOUR_API_KEY")
    req.Header.Add("Content-Type", "application/json")

    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()
}`,

  "python": `import requests

url = "https://api.ximpli-me.com/v1/answer/update/1735467904042d4a92f55cc6f"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "answerId": "042f9927d2e5",
    "answers": [
        {
            "questionId": "1db26599",
            "answerQuestion": "dfsfdsdf"
        },
        {
            "questionId": "6b0fd1b4",
            "answerQuestion": "234234234"
        },
        {
            "questionId": "58cd8a97",
            "selectedOption": {
                "optionId": "9438efb7",
                "option": "Male"
            }
        }
    ]
}

response = requests.put(url, json=data, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const data = {
    answerId: "042f9927d2e5",
    answers: [
        {
            questionId: "1db26599",
            answerQuestion: "dfsfdsdf"
        },
        {
            questionId: "6b0fd1b4",
            answerQuestion: "234234234"
        },
        {
            questionId: "58cd8a97",
            selectedOption: {
                optionId: "9438efb7",
                option: "Male"
            }
        }
    ]
};

const config = {
    headers: { 
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
};

axios.put('https://api.ximpli-me.com/v1/answer/update/1735467904042d4a92f55cc6f', data, config)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$response = $client->put('https://api.ximpli-me.com/v1/answer/update/1735467904042d4a92f55cc6f', [
    'headers' => [
        'Authorization' => 'Bearer YOUR_API_KEY',
        'Content-Type' => 'application/json'
    ],
    'json' => [
        'answerId' => '042f9927d2e5',
        'answers' => [
            [
                'questionId' => '1db26599',
                'answerQuestion' => 'dfsfdsdf'
            ],
            [
                'questionId' => '6b0fd1b4',
                'answerQuestion' => '234234234'
            ],
            [
                'questionId' => '58cd8a97',
                'selectedOption' => [
                    'optionId' => '9438efb7',
                    'option' => 'Male'
                ]
            ]
        ]
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
      type: "Object",
      description: "Updated answer object",
      properties: {
        _id: {
          type: "String",
          description: "Internal ID of the answer"
        },
        eformId: {
          type: "String",
          description: "ID of the eform"
        },
        answerId: {
          type: "String",
          description: "Unique identifier for this answer"
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
              description: "Selected option for choice questions",
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
            fileDetails: {
              type: "Object",
              description: "File attachment details",
              properties: {
                url: {
                  type: "String",
                  description: "URL of the attached file"
                },
                fileName: {
                  type: "String",
                  description: "Name of the attached file"
                },
                fileType: {
                  type: "String",
                  description: "MIME type of the attached file"
                }
              }
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
    "message": "Answer updated successfully.",
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

```json
{
    "statusCode": 400,
    "message": [
        "Invalid answer format",
        "Question not found",
        "Invalid option for question type"
    ]
}
``` 