---
sidebar_position: 7
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Submit Eform

<HttpMethod method="POST" /> `/v1/eform/submit`

Submit answers for an eform.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "eformId",
      type: "String",
      required: true,
      description: "ID of the eform to submit answers for"
    },
    {
      name: "answers",
      type: "Array Object",
      required: true,
      description: "Array of answer objects",
      properties: {
        questionId: {
          type: "String",
          required: false,
          description: "ID of the question being answered"
        },
        answerQuestion: {
          type: "String",
          required: false,
          description: "Text answer for the question"
        },
        selectedOption: {
          type: "Object|Array",
          required: false,
          description: "Selected option(s) for choice-based questions",
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
        },
        base64File: {
          type: "String",
          required: false,
          description: "Base64 encoded file content"
        },
        fileDetails: {
          type: "Object",
          required: false,
          description: "Details of the uploaded file",
          properties: {
            url: {
              type: "String",
              required: false,
              description: "URL of the uploaded file"
            },
            fileName: {
              type: "String",
              required: false,
              description: "Name of the uploaded file"
            },
            fileType: {
              type: "String",
              required: false,
              description: "MIME type of the file"
            }
          }
        },
        multipleAnswers: {
          type: "Array Object",
          required: false,
          description: "Array of answers for multiple-type questions",
          properties: {
            questionId: {
              type: "String",
              required: false,
              description: "ID of the sub-question"
            },
            answerQuestion: {
              type: "String",
              required: false,
              description: "Text answer for the sub-question"
            },
            selectedOption: {
              type: "Object|Array",
              required: false,
              description: "Selected option(s) for the sub-question",
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
            },
            base64File: {
              type: "String",
              required: false,
              description: "Base64 encoded file for the sub-question"
            },
            fileDetails: {
              type: "Object",
              required: false,
              description: "File details for the sub-question",
              properties: {
                url: {
                  type: "String",
                  required: false,
                  description: "URL of the uploaded file"
                },
                fileName: {
                  type: "String",
                  required: false,
                  description: "Name of the uploaded file"
                },
                fileType: {
                  type: "String",
                  required: false,
                  description: "MIME type of the file"
                }
              }
            }
          }
        }
      }
    }
  ]}
/>

## Example Request

<CodeTabs examples={{
  "curl": `curl -X POST 'https://api.ximpli-me.com/v1/eform/submit' \\
-H 'Authorization: Bearer YOUR_API_KEY' \\
-H 'Content-Type: application/json' \\
-d '{
    "eformId": "1735467904042d4a92f55cc6f",
    "answers": [
        {
            "questionId": "1db26599",
            "answerQuestion": "test"
        },
        {
            "questionId": "6b0fd1b4",
            "answerQuestion": "234324324"
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
        "eformId": "1735467904042d4a92f55cc6f",
        "answers": []map[string]interface{}{
            {
                "questionId": "1db26599",
                "answerQuestion": "test",
            },
            {
                "questionId": "6b0fd1b4",
                "answerQuestion": "234324324",
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
    req, err := http.NewRequest("POST", "https://api.ximpli-me.com/v1/eform/submit", bytes.NewBuffer(jsonData))
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
import json

url = "https://api.ximpli-me.com/v1/eform/submit"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "eformId": "1735467904042d4a92f55cc6f",
    "answers": [
        {
            "questionId": "1db26599",
            "answerQuestion": "test"
        },
        {
            "questionId": "6b0fd1b4",
            "answerQuestion": "234324324"
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

response = requests.post(url, headers=headers, json=data)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const data = {
    eformId: "1735467904042d4a92f55cc6f",
    answers: [
        {
            questionId: "1db26599",
            answerQuestion: "test"
        },
        {
            questionId: "6b0fd1b4",
            answerQuestion: "234324324"
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

axios.post('https://api.ximpli-me.com/v1/eform/submit', data, config)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$response = $client->post('https://api.ximpli-me.com/v1/eform/submit', [
    'headers' => [
        'Authorization' => 'Bearer YOUR_API_KEY',
        'Content-Type' => 'application/json'
    ],
    'json' => [
        'eformId' => '1735467904042d4a92f55cc6f',
        'answers' => [
            [
                'questionId' => '1db26599',
                'answerQuestion' => 'test'
            ],
            [
                'questionId' => '6b0fd1b4',
                'answerQuestion' => '234324324'
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
      type: "Array",
      description: "Array of submitted answers",
      properties: {
        _id: {
          type: "String",
          description: "Internal ID of the submission"
        },
        eformId: {
          type: "String",
          description: "ID of the submitted eform"
        },
        answerId: {
          type: "String",
          description: "Unique identifier for the submission"
        },
        answers: {
          type: "Array",
          description: "Array of submitted answers with question details",
          properties: {
            questionId: {
              type: "String",
              description: "ID of the answered question"
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
              description: "Type of the question"
            },
            answerQuestion: {
              type: "String",
              description: "Text answer for the question"
            },
            selectedOption: {
              type: "Object|null",
              description: "Selected option details for choice questions"
            },
            multipleAnswers: {
              type: "Array",
              description: "Answers for multiple-type questions"
            }
          }
        },
        createdAt: {
          type: "String",
          description: "Submission timestamp"
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
    "statusCode": 201,
    "message": "Eform submitted successfully.",
    "data": [
        {
            "_id": "6771322ac5bc95af3d19c3c8",
            "eformId": "1735467904042d4a92f55cc6f",
            "answerId": "c071f7ab20d6",
            "answers": [
                {
                    "questionId": "1db26599",
                    "questionTitle": "What is your name?",
                    "questionDescription": null,
                    "questionType": "text",
                    "answerQuestion": "test",
                    "selectedOption": null,
                    "multipleAnswers": []
                },
                {
                    "questionId": "6b0fd1b4",
                    "questionTitle": "What is your phone number?",
                    "questionDescription": null,
                    "questionType": "number",
                    "answerQuestion": "234324324",
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
            "createdAt": "2024-12-29T11:27:38.967Z",
            "updatedAt": "2024-12-29T11:27:38.967Z"
        }
    ]
}
```

## Error Response

```json
{
    "statusCode": 400,
    "message": [
        "Question ID: 58cd8a97, Selected option is invalid for question",
        "The answer already taken from question ID: 1db26599",
        "The answer already taken from question ID: 6b0fd1b4"
    ]
}
```

This error occurs when:
- The eform ID is invalid or not found
- Required questions are not answered
- Selected options are invalid for the question type
- Duplicate answers for questions marked as unique
- Invalid question IDs
- Invalid answer format for question type 