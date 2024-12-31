---
sidebar_position: 9
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Update Eform Status

<HttpMethod method="PATCH" /> `/v1/eform/status/:eformId`

Update the status of an existing eform.

## Example Request

<CodeTabs examples={{
  "curl": `curl -X PATCH 'https://api.ximpli-me.com/v1/eform/status/1735467904042d4a92f55cc6f' \\
-H 'Authorization: Bearer YOUR_API_KEY'`,

  "go": `package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    client := &http.Client{}
    req, err := http.NewRequest("PATCH", "https://api.ximpli-me.com/v1/eform/status/1735467904042d4a92f55cc6f", nil)
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

url = "https://api.ximpli-me.com/v1/eform/status/1735467904042d4a92f55cc6f"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.patch(url, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const config = {
    headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
};

axios.patch('https://api.ximpli-me.com/v1/eform/status/1735467904042d4a92f55cc6f', {}, config)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$response = $client->patch('https://api.ximpli-me.com/v1/eform/status/1735467904042d4a92f55cc6f', [
    'headers' => [
        'Authorization' => 'Bearer YOUR_API_KEY'
    ]
]);

echo $response->getBody();`
}} />

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "eformId",
      type: "String",
      required: true,
      location: "path",
      description: "ID of the eform to update status"
    }
  ]}
/>

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
      description: "Updated eform object",
      properties: {
        _id: {
          type: "String",
          description: "Internal ID of the eform"
        },
        eformId: {
          type: "String",
          description: "Unique identifier for the eform"
        },
        title: {
          type: "String",
          description: "Title of the eform"
        },
        slug: {
          type: "String",
          description: "URL-friendly version of the title"
        },
        eformDescription: {
          type: "String",
          description: "Description of the eform"
        },
        workflowId: {
          type: "String",
          description: "Associated workflow ID"
        },
        workflow: {
          type: "Object",
          description: "Associated workflow details",
          properties: {
            workflowId: {
              type: "String",
              description: "Workflow identifier"
            },
            name: {
              type: "String",
              description: "Workflow name"
            },
            description: {
              type: "String",
              description: "Workflow description"
            },
            workflowType: {
              type: "String",
              description: "Type of workflow"
            },
            documentType: {
              type: "String",
              description: "Type of document"
            }
          }
        },
        questions: {
          type: "Array",
          description: "Array of questions in the eform",
          properties: {
            questionId: {
              type: "String",
              description: "Question identifier"
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
              description: "Type of question"
            },
            isMandatory: {
              type: "Boolean",
              description: "Whether the question is required"
            },
            isUnique: {
              type: "Boolean",
              description: "Whether answers must be unique"
            },
            options: {
              type: "Array",
              description: "Available options for choice questions"
            }
          }
        },
        isActive: {
          type: "Boolean",
          description: "Whether the eform is active"
        },
        createdDate: {
          type: "String",
          description: "Creation timestamp"
        }
      }
    }
  ]}
/>

## Example Success Response

```json
{
    "statusCode": 200,
    "message": "Eform status updated successfully.",
    "data": {
        "_id": "67712380c5bc95af3d19c282",
        "eformId": "1735467904042d4a92f55cc6f",
        "title": "Test Ximpli Eform Demo",
        "slug": "test-ximpli-eform-demo",
        "eformDescription": "",
        "workflowId": "c0a98df9fa0d",
        "workflow": {
            "workflowId": "c0a98df9fa0d",
            "name": "Test Workflow Admin Microservices",
            "description": "test",
            "workflowType": "APPROVAL_ONLY",
            "documentType": "DOCUMENT"
        },
        "isActive": false,
        "questions": [
            {
                "questionId": "1db26599",
                "questionTitle": "What is your name?",
                "questionDescription": null,
                "questionType": "text",
                "isMandatory": true,
                "isUnique": true,
                "options": []
            }
        ],
        "createdDate": "2024-12-29T10:25:04.093Z"
    }
}
```

## Example Error Response

```json
{
    "statusCode": 404,
    "message": "Eform not found"
}
```

This error occurs when:
- The eform ID is invalid
- The eform does not exist
- The user does not have permission to access the eform 