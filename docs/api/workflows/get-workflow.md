---
sidebar_position: 2
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Get Workflow

<HttpMethod method="GET" /> `/v1/workflow/{workflowId}`

This endpoint retrieves a specific workflow by its ID.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "workflowId",
      type: "String",
      required: true,
      location: "path",
      description: "The ID of the workflow to retrieve"
    }
  ]}
/>

## Example Request

<CodeTabs examples={{
  "curl": `curl -X GET 'https://api.ximpli-me.com/v1/workflow/67516dc5db0832d3a8dec572' \\
-H 'Authorization: Bearer YOUR_API_KEY'`,

  "python": `import requests

url = "https://api.ximpli-me.com/v1/workflow/67516dc5db0832d3a8dec572"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const config = {
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
};

axios.get('https://api.ximpli-me.com/v1/workflow/67516dc5db0832d3a8dec572', config)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,

  "go": `package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    client := &http.Client{}
    req, err := http.NewRequest("GET", "https://api.ximpli-me.com/v1/workflow/67516dc5db0832d3a8dec572", nil)
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

  "php": `<?php

$client = new GuzzleHttp\\Client();

$response = $client->get('https://api.ximpli-me.com/v1/workflow/67516dc5db0832d3a8dec572', [
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
      type: "Object",
      description: "Workflow object"
    }
  ]}
/>

## Data Object Response

<ResponseTable
  parameters={[
    {
      name: "_id",
      type: "String",
      description: "Internal workflow document ID",
      example: "67516dc5db0832d3a8dec572"
    },
    {
      name: "workflowId",
      type: "String",
      description: "Unique workflow identifier",
      example: "c743f08873ef"
    },
    {
      name: "name",
      type: "String",
      description: "Workflow name",
      example: "Document Approval"
    },
    {
      name: "description",
      type: "String",
      description: "Workflow description",
      example: "Standard document approval workflow"
    },
    {
      name: "workflowType",
      type: "String",
      description: "Type of workflow (APPROVAL_ONLY, ACKNOWLEDGE_ONLY, APPROVAL_AND_ACKNOWLEDGE)",
      example: "APPROVAL"
    },
    {
      name: "workflowDocumentType",
      type: "String",
      description: "Type of document (DOCUMENT, NON_DOCUMENT)",
      example: "DOCUMENT"
    },
    {
      name: "isWorkflowEform",
      type: "Boolean",
      description: "Whether this workflow is for eforms",
      example: true
    },
    {
      name: "workflowTags",
      type: "Array",
      description: "Array of tags associated with the workflow",
      example: ["Approval", "Document"]
    },
    {
      name: "approvers",
      type: "Array",
      description: "Array of workflow approvers",
      properties: {
        approverId: {
          type: "string",
          description: "Unique identifier for the approver"
        },
        referenceId: {
          type: "string",
          description: "Reference identifier for the approver"
        },
        fullName: {
          type: "string",
          description: "Full name of the approver"
        },
        role: {
          type: "string",
          description: "Role of the approver"
        }
      },
      example: [{
        approverId: "7441917fb947",
        referenceId: "3",
        fullName: "John Doe",
        role: "HEAD OF DEPARTMENT"
      }]
    },
    {
      name: "acknowledgers",
      type: "Array",
      description: "Array of workflow acknowledgers",
      properties: {
        acknowledgerId: {
          type: "string",
          description: "Unique identifier for the acknowledger"
        },
        referenceId: {
          type: "string",
          description: "Reference identifier for the acknowledger"
        },
        fullName: {
          type: "string",
          description: "Full name of the acknowledger"
        },
        role: {
          type: "string",
          description: "Role of the acknowledger"
        }
      },
      example: [{
        acknowledgerId: "8552028gc058",
        referenceId: "4",
        fullName: "Jane Smith",
        role: "TEAM LEAD"
      }]
    },
    {
      name: "approvalReminders",
      type: "Object",
      description: "Reminder settings for the workflow",
      properties: {
        enabled: {
          type: "boolean",
          description: "Whether reminders are enabled",
          required: true
        },
        frequency: {
          type: "string",
          description: "Frequency of reminders (DAILY, WEEKLY)",
          required: true
        },
        maxReminders: {
          type: "number",
          description: "Maximum number of reminders to send",
          required: true
        }
      },
      example: {
        enabled: true,
        frequency: "DAILY",
        maxReminders: 3
      }
    },
    {
      name: "createdDate",
      type: "String",
      description: "Workflow creation date",
      example: "2024-12-05T09:09:25.409Z"
    }
  ]}
/>

## Example Response

```json
{
    "statusCode": 200,
    "message": "Workflow fetched successfully.",
    "data": {
        "_id": "67516dc5db0832d3a8dec572",
        "workflowId": "c743f08873ef",
        "name": "Document Approval",
        "description": "Standard document approval workflow",
        "type": "APPROVAL",
        "approvers": [
            {
                "approverId": "7441917fb947",
                "referenceId": "3",
                "fullName": "John Doe",
                "role": "HEAD OF DEPARTMENT"
            }
        ],
        "acknowledgers": [
            {
                "acknowledgerId": "8552028gc058",
                "referenceId": "4",
                "fullName": "Jane Smith",
                "role": "TEAM LEAD"
            }
        ],
        "approvalReminders": {
            "enabled": true,
            "frequency": "DAILY",
            "maxReminders": 3
        },
        "createdDate": "2024-12-05T09:09:25.409Z"
    }
}
```

## Example Error Response

```json
{
    "statusCode": 404,
    "message": "Workflow not found"
}
``` 