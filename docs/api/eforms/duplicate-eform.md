---
sidebar_position: 8
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Duplicate Eform

<HttpMethod method="POST" /> `/v1/eform/duplicate/:eformId`

Create a copy of an existing eform with all its configurations and questions.

## Example Request

<CodeTabs examples={{
  "curl": `curl -X POST 'https://api.ximpli-me.com/v1/eform/duplicate/1735467904042d4a92f55cc6f' \\
-H 'Authorization: Bearer YOUR_API_KEY'`,

  "go": `package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    client := &http.Client{}
    req, err := http.NewRequest("POST", "https://api.ximpli-me.com/v1/eform/duplicate/1735467904042d4a92f55cc6f", nil)
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

url = "https://api.ximpli-me.com/v1/eform/duplicate/1735467904042d4a92f55cc6f"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.post(url, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const config = {
    headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
};

axios.post('https://api.ximpli-me.com/v1/eform/duplicate/1735467904042d4a92f55cc6f', {}, config)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$response = $client->post('https://api.ximpli-me.com/v1/eform/duplicate/1735467904042d4a92f55cc6f', [
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
      description: "ID of the eform to duplicate"
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
      description: "Duplicated eform object",
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
          description: "Title of the duplicated eform"
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
        eformType: {
          type: "String",
          description: "Type of eform (PRIVATE or PUBLIC)"
        },
        isActive: {
          type: "Boolean",
          description: "Whether the eform is active"
        },
        isContinueToWorkflow: {
          type: "Boolean",
          description: "Whether to continue to workflow after submission"
        },
        deadlineSubmission: {
          type: "String|null",
          description: "Submission deadline date"
        },
        reminderToOtherXimpliUser: {
          type: "Array",
          description: "List of users to remind"
        },
        isMobileUsed: {
          type: "Boolean",
          description: "Whether the form can be used on mobile"
        },
        isActivateAutoGenerate: {
          type: "Boolean",
          description: "Whether to auto-generate documents"
        },
        autoGenerateFile: {
          type: "String",
          description: "Path to auto-generated file template"
        },
        isOneTimeSubmit: {
          type: "Boolean",
          description: "Whether the form can only be submitted once"
        },
        allowEdit: {
          type: "Boolean",
          description: "Whether submissions can be edited"
        },
        afterSubmitMessage: {
          type: "String",
          description: "Message to display after form submission"
        },
        welcomePage: {
          type: "String",
          description: "Welcome page content"
        },
        isEformSubmitted: {
          type: "Boolean",
          description: "Whether the form has been submitted"
        },
        totalSubmission: {
          type: "Number",
          description: "Total number of submissions"
        },
        createdDate: {
          type: "String",
          description: "Creation timestamp"
        },
        questions: {
          type: "Array",
          description: "Array of questions in the eform"
        }
      }
    }
  ]}
/>

## Example Success Response

```json
{
    "statusCode": 200,
    "message": "Eform duplicated successfully.",
    "data": {
        "_id": "6771361cc5bc95af3d19c41c",
        "eformId": "173547266862885ff804b7f83",
        "title": "Test Ximpli Eform Demo (1)",
        "slug": "test-ximpli-eform-demo-1",
        "eformDescription": "",
        "workflowId": "c0a98df9fa0d",
        "workflow": {
            "workflowId": "c0a98df9fa0d",
            "name": "Test Workflow Admin Microservices",
            "description": "test",
            "workflowType": "APPROVAL_ONLY",
            "documentType": "DOCUMENT"
        },
        "createdDate": "2024-12-29T11:44:28.681Z",
        "eformType": "PRIVATE",
        "isActive": true,
        "isContinueToWorkflow": false,
        "deadlineSubmission": null,
        "reminderToOtherXimpliUser": [],
        "isMobileUsed": false,
        "isActivateAutoGenerate": false,
        "autoGenerateFile": "",
        "isOneTimeSubmit": false,
        "allowEdit": true,
        "afterSubmitMessage": "",
        "welcomePage": "",
        "isEformSubmitted": false,
        "totalSubmission": 0,
        "questions": []
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