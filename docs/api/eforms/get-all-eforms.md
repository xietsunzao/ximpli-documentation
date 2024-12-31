---
sidebar_position: 1
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import ResponseTable from '@site/src/components/ResponseTable';

# Get All Eforms

<HttpMethod method="GET" /> `/v1/eforms`

This endpoint retrieves a list of all eforms.

## Example Request

<CodeTabs examples={{
  "curl": `curl -X GET 'https://api.ximpli-me.com/v1/eforms' \\
-H 'Authorization: Bearer YOUR_API_KEY'`,

  "go": `package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    client := &http.Client{}
    req, err := http.NewRequest("GET", "https://api.ximpli-me.com/v1/eforms", nil)
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

url = "https://api.ximpli-me.com/v1/eforms"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const config = {
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
};

axios.get('https://api.ximpli-me.com/v1/eforms', config)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$response = $client->get('https://api.ximpli-me.com/v1/eforms', [
    'headers' => [
        'Authorization' => 'Bearer YOUR_API_KEY'
    ]
]);

echo $response->getBody();`
}} />

## Response Parameters

| Parameter | Type | Description |
|-|-|-|
| `statusCode` | `number` | HTTP status code of the response |
| `message` | `string` | Success/error message |
| `data` | `array` | Array of eform objects |

## Data Object Response

<ResponseTable
  parameters={[
    {
      name: "_id",
      type: "String",
      description: "Internal ID of the eform",
      example: "67517284db0832d3a8dec606"
    },
    {
      name: "eformId",
      type: "String",
      description: "Unique identifier for the eform",
      example: "1733390980372a8331481fb4b"
    },
    {
      name: "title",
      type: "String",
      description: "Title of the eform",
      example: "Test Eform Simple"
    },
    {
      name: "slug",
      type: "String",
      description: "URL-friendly version of the title",
      example: "test-eform-simple"
    },
    {
      name: "eformDescription",
      type: "String",
      description: "Description of the eform",
      example: ""
    },
    {
      name: "workflowId",
      type: "String",
      description: "Associated workflow ID",
      example: "c0a98df9fa0d"
    },
    {
      name: "workflow",
      type: "Object",
      description: "Associated workflow details",
      properties: {
        workflowId: {
          type: "string",
          description: "Workflow identifier"
        },
        name: {
          type: "string",
          description: "Workflow name"
        },
        description: {
          type: "string",
          description: "Workflow description"
        },
        workflowType: {
          type: "string",
          description: "Type of workflow"
        },
        documentType: {
          type: "string",
          description: "Type of document"
        }
      },
      example: {
        workflowId: "c0a98df9fa0d",
        name: "Test Workflow Admin Microservices",
        description: "test",
        workflowType: "APPROVAL_ONLY",
        documentType: "DOCUMENT"
      }
    },
    {
      name: "createdDate",
      type: "String",
      description: "Creation timestamp",
      example: "2024-12-05T09:29:40.405Z"
    },
    {
      name: "eformType",
      type: "String",
      description: "Type of eform (PRIVATE, PUBLIC)",
      example: "PRIVATE"
    },
    {
      name: "isActive",
      type: "Boolean",
      description: "Whether the eform is active",
      example: true
    },
    {
      name: "questions",
      type: "Array",
      description: "Array of questions in the eform",
      properties: {
        questionId: {
          type: "string",
          description: "Unique identifier for the question"
        },
        questionTitle: {
          type: "string",
          description: "Title of the question"
        },
        questionDescription: {
          type: "string",
          description: "Description of the question"
        },
        questionType: {
          type: "string",
          description: "Type of question (text, number, radio, checkbox, select, file, multiple)"
        },
        isMandatory: {
          type: "boolean",
          description: "Whether the question is required"
        },
        isUnique: {
          type: "boolean",
          description: "Whether the answer must be unique"
        },
        suggestionAnswer: {
          type: "string",
          description: "Suggested answer for the question"
        },
        isAttachment: {
          type: "boolean",
          description: "Whether file attachment is allowed"
        },
        attachmentFile: {
          type: "string",
          description: "Path to attached file"
        },
        allowedFileTypes: {
          type: "array",
          description: "List of allowed file types"
        },
        totalQuestions: {
          type: "number",
          description: "Total number of sub-questions"
        },
        options: {
          type: "array",
          description: "Available options for choice questions",
          properties: {
            optionId: {
              type: "string",
              description: "Unique identifier for the option"
            },
            option: {
              type: "string",
              description: "Option text"
            }
          }
        },
        multipleQuestions: {
          type: "array",
          description: "Nested questions for multiple question type",
          properties: {
            questionId: {
              type: "string",
              description: "Unique identifier for the sub-question"
            },
            questionTitle: {
              type: "string",
              description: "Title of the sub-question"
            },
            questionType: {
              type: "string",
              description: "Type of sub-question"
            },
            isMandatory: {
              type: "boolean",
              description: "Whether the sub-question is required"
            }
          }
        }
      },
      example: [{
        questionId: "a937ea8f",
        questionTitle: "what is your name?",
        questionDescription: null,
        questionType: "text",
        isMandatory: true,
        isUnique: false,
        suggestionAnswer: "",
        isAttachment: false,
        attachmentFile: null,
        allowedFileTypes: [],
        totalQuestions: 0,
        options: [],
        multipleQuestions: []
      }]
    },
    {
      name: "isContinueToWorkflow",
      type: "Boolean",
      description: "Whether to continue to workflow after submission",
      example: true
    },
    {
      name: "deadlineSubmission",
      type: "String",
      description: "Deadline for form submission",
      example: null
    },
    {
      name: "reminderToOtherXimpliUser",
      type: "Array",
      description: "List of users to remind",
      example: []
    },
    {
      name: "isMobileUsed",
      type: "Boolean",
      description: "Whether the form can be used on mobile",
      example: false
    },
    {
      name: "isActivateAutoGenerate",
      type: "Boolean",
      description: "Whether to auto-generate documents",
      example: true
    },
    {
      name: "autoGenerateFile",
      type: "String",
      description: "Path to auto-generated file template",
      example: "http://localhost:3000/document/eform/1733390980372a8331481fb4b/template/92d80bdc59f4.docx"
    },
    {
      name: "isOneTimeSubmit",
      type: "Boolean",
      description: "Whether the form can only be submitted once",
      example: false
    },
    {
      name: "allowEdit",
      type: "Boolean",
      description: "Whether submissions can be edited",
      example: true
    },
    {
      name: "afterSubmitMessage",
      type: "String",
      description: "Message to display after form submission",
      example: "<p class=\"mt-4 text-gray-500 dark:text-gray-400\">\r\n\r\n</p>"
    },
    {
      name: "welcomePage",
      type: "String",
      description: "Welcome page content",
      example: null
    },
    {
      name: "isEformSubmitted",
      type: "Boolean",
      description: "Whether the form has been submitted",
      example: true
    },
    {
      name: "totalSubmission",
      type: "Number",
      description: "Total number of submissions",
      example: 1
    }
  ]}
/>

## Example Response

```json
{
    "statusCode": 200,
    "message": "Eforms fetched successfully.",
    "data": [
        {
            "_id": "67517284db0832d3a8dec606",
            "eformId": "1733390980372a8331481fb4b",
            "title": "Test Eform Simple",
            "slug": "test-eform-simple",
            "eformDescription": "",
            "workflowId": "c0a98df9fa0d",
            "workflow": {
                "workflowId": "c0a98df9fa0d",
                "name": "Test Workflow Admin Microservices",
                "description": "test",
                "workflowType": "APPROVAL_ONLY",
                "documentType": "DOCUMENT"
            },
            "createdDate": "2024-12-05T09:29:40.405Z",
            "eformType": "PRIVATE",
            "isActive": true,
            "questions": [
                {
                    "questionId": "a937ea8f",
                    "questionTitle": "what is your name?",
                    "questionDescription": null,
                    "questionType": "text",
                    "isMandatory": true,
                    "isUnique": false,
                    "suggestionAnswer": "",
                    "isAttachment": false,
                    "attachmentFile": null,
                    "allowedFileTypes": [],
                    "totalQuestions": 0,
                    "multipleQuestions": [],
                    "_id": "67517284db0832d3a8dec607",
                    "options": []
                }
            ],
            "isContinueToWorkflow": true,
            "deadlineSubmission": null,
            "reminderToOtherXimpliUser": [],
            "isMobileUsed": false,
            "isActivateAutoGenerate": true,
            "autoGenerateFile": "http://localhost:3000/document/eform/1733390980372a8331481fb4b/template/92d80bdc59f4.docx",
            "isOneTimeSubmit": false,
            "allowEdit": true,
            "afterSubmitMessage": "<p class=\"mt-4 text-gray-500 dark:text-gray-400\">\r\n\r\n</p>",
            "welcomePage": null,
            "isEformSubmitted": true,
            "totalSubmission": 1
        }
    ]
}