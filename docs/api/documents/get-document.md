---
sidebar_position: 4
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Get Document

<HttpMethod method="GET" /> `/v1/document/:documentId`

Get a specific document by its ID.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "documentId",
      type: "String",
      required: true,
      location: "path",
      description: "ID of the document to retrieve"
    }
  ]}
/>

## Example Request

<CodeTabs examples={{
  "curl": `curl -X GET 'https://api.ximpli-me.com/v1/document/17333910548810845e558f937' \\
-H 'Authorization: Bearer YOUR_API_KEY'`,

  "go": `package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    client := &http.Client{}
    req, err := http.NewRequest("GET", "https://api.ximpli-me.com/v1/document/17333910548810845e558f937", nil)
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

url = "https://api.ximpli-me.com/v1/document/17333910548810845e558f937"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const config = {
    headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
};

axios.get('https://api.ximpli-me.com/v1/document/17333910548810845e558f937', config)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$response = $client->get('https://api.ximpli-me.com/v1/document/17333910548810845e558f937', [
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
| `data` | `object` | Document object |

## Data Object Response

<ResponseTable
  parameters={[
    {
      name: "_id",
      type: "String",
      description: "Internal ID of the document",
      example: "675172cedb0832d3a8dec63e"
    },
    {
      name: "documentId",
      type: "String",
      description: "Unique identifier for the document",
      example: "17333910548810845e558f937"
    },
    {
      name: "fileName",
      type: "String",
      description: "Name of the document file",
      example: "e777f830e648.pdf"
    },
    {
      name: "fileType",
      type: "String",
      description: "Type of the document file",
      example: "pdf"
    },
    {
      name: "fileSize",
      type: "Number",
      description: "Size of the file in bytes",
      example: 0
    },
    {
      name: "filePath",
      type: "String",
      description: "URL path to access the document",
      example: "http://localhost:3000/document/eform/1733390980372a8331481fb4b/answers/e777f830e648.pdf"
    },
    {
      name: "documentType",
      type: "String",
      description: "Type of document (ANSWER, TEMPLATE)",
      example: "ANSWER"
    },
    {
      name: "status",
      type: "String",
      description: "Document status (PENDING, APPROVED)",
      example: "PENDING"
    },
    {
      name: "eform",
      type: "Object",
      description: "Associated eform information",
      properties: {
        eformId: {
          type: "String",
          description: "ID of the eform"
        },
        title: {
          type: "String",
          description: "Title of the eform"
        },
        slug: {
          type: "String",
          description: "URL-friendly version of the title"
        },
        eformType: {
          type: "String",
          description: "Type of the eform"
        }
      },
      example: {
        eformId: "1733390980372a8331481fb4b",
        title: "Test Eform Simple",
        slug: "test-eform-simple",
        eformType: "PRIVATE"
      }
    },
    {
      name: "workflow",
      type: "Object",
      description: "Associated workflow information",
      properties: {
        workflowId: {
          type: "String",
          description: "ID of the workflow"
        },
        name: {
          type: "String",
          description: "Name of the workflow"
        },
        description: {
          type: "String",
          description: "Description of the workflow"
        },
        workflowType: {
          type: "String",
          description: "Type of workflow"
        },
        documentType: {
          type: "String",
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
      name: "answers",
      type: "Object",
      description: "Answer details if document type is ANSWER",
      properties: {
        answerId: {
          type: "String",
          description: "ID of the answer"
        },
        eformId: {
          type: "String",
          description: "ID of the associated eform"
        },
        answers: {
          type: "Array",
          description: "Array of answer objects"
        }
      },
      example: {
        answerId: "b20b8623cb83",
        eformId: "1733390980372a8331481fb4b",
        answers: [
          {
            questionId: "a937ea8f",
            questionTitle: "what is your name?",
            questionDescription: null,
            questionType: "text",
            answerQuestion: "asdfasdf",
            selectedOption: null,
            multipleAnswers: []
          }
        ]
      }
    },
    {
      name: "createdBy",
      type: "Object",
      description: "User who created the document",
      properties: {
        userId: {
          type: "String",
          description: "ID of the user"
        },
        fullName: {
          type: "String",
          description: "Full name of the user"
        },
        role: {
          type: "String",
          description: "Role of the user"
        }
      },
      example: {
        userId: "XIMPLI-SYSTEM",
        fullName: "SYSTEM",
        role: "SYSTEM"
      }
    },
    {
      name: "directory",
      type: "String",
      description: "Directory path of the document",
      example: "eform/answers"
    },
    {
      name: "metadata",
      type: "Object",
      description: "Additional metadata for the document",
      example: null
    },
    {
      name: "createdDate",
      type: "String",
      description: "Document creation timestamp",
      example: "2024-12-05T09:30:54.881Z"
    },
    {
      name: "approvedDate",
      type: "String",
      description: "Document approval timestamp",
      example: null
    },
    {
      name: "createdAt",
      type: "String",
      description: "Record creation timestamp",
      example: "2024-12-05T09:30:54.882Z"
    },
    {
      name: "updatedAt",
      type: "String",
      description: "Last update timestamp",
      example: "2024-12-05T09:30:54.882Z"
    }
  ]}
/>

## Example Success Response

```json
{
    "statusCode": 200,
    "message": "Document fetched successfully.",
    "data": {
        "_id": "675172cedb0832d3a8dec63e",
        "documentId": "17333910548810845e558f937",
        "fileName": "e777f830e648.pdf",
        "fileType": "pdf",
        "fileSize": 0,
        "filePath": "http://localhost:3000/document/eform/1733390980372a8331481fb4b/answers/e777f830e648.pdf",
        "documentType": "ANSWER",
        "status": "PENDING",
        "eform": {
            "eformId": "1733390980372a8331481fb4b",
            "title": "Test Eform Simple",
            "slug": "test-eform-simple",
            "eformType": "PRIVATE"
        },
        "workflow": {
            "workflowId": "c0a98df9fa0d",
            "name": "Test Workflow Admin Microservices",
            "description": "test",
            "workflowType": "APPROVAL_ONLY",
            "documentType": "DOCUMENT"
        },
        "answers": {
            "answerId": "b20b8623cb83",
            "eformId": "1733390980372a8331481fb4b",
            "answers": [
                {
                    "questionId": "a937ea8f",
                    "questionTitle": "what is your name?",
                    "questionDescription": null,
                    "questionType": "text",
                    "answerQuestion": "asdfasdf",
                    "selectedOption": null,
                    "multipleAnswers": []
                },
                {
                    "questionId": "004bd32f",
                    "questionTitle": "Where are you from?",
                    "questionDescription": null,
                    "questionType": "text",
                    "answerQuestion": "asdfasd",
                    "selectedOption": null,
                    "multipleAnswers": []
                }
            ]
        },
        "createdBy": {
            "userId": "XIMPLI-SYSTEM",
            "fullName": "SYSTEM",
            "role": "SYSTEM"
        },
        "approvedBy": null,
        "directory": "eform/answers",
        "metadata": null,
        "createdDate": "2024-12-05T09:30:54.881Z",
        "approvedDate": null,
        "createdAt": "2024-12-05T09:30:54.882Z",
        "updatedAt": "2024-12-05T09:30:54.882Z"
    }
}
```

## Error Response

```json
{
    "statusCode": 404,
    "message": "Document not found"
}
``` 