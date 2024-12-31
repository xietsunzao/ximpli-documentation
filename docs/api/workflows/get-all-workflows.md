---
sidebar_position: 1
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import ResponseTable from '@site/src/components/ResponseTable';

# Get All Workflows

<HttpMethod method="GET" /> `/v1/workflows`

This endpoint retrieves all workflows for a specific organization.

## Example Request

<CodeTabs examples={{
  "curl": `curl -X GET 'https://api.ximpli-me.com/v1/workflows' \\
-H 'Authorization: Bearer YOUR_API_KEY'`,

  "go": `package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    client := &http.Client{}
    req, err := http.NewRequest("GET", "https://api.ximpli-me.com/v1/workflows", nil)
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

url = "https://api.ximpli-me.com/v1/workflows"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const config = {
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
};

axios.get('https://api.ximpli-me.com/v1/workflows', config)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$response = $client->get('https://api.ximpli-me.com/v1/workflows', [
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
| `data` | `array` | Array of workflow objects |

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
      example: "c0a98df9fa0d"
    },
    {
      name: "organizationId",
      type: "String",
      description: "Organization ID this workflow belongs to",
      example: "c743f08873ef"
    },
    {
      name: "name",
      type: "String",
      description: "Workflow name",
      example: "Test Workflow Admin Microservices"
    },
    {
      name: "description",
      type: "String",
      description: "Workflow description",
      example: "test"
    },
    {
      name: "workflowType",
      type: "String",
      description: "Type of workflow (APPROVAL_ONLY, ACKNOWLEDGE_ONLY, APPROVAL_AND_ACKNOWLEDGE)",
      example: "APPROVAL_ONLY"
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
      example: ["Katalog"]
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
        approverType: {
          type: "string",
          description: "Type of approver"
        },
        approverName: {
          type: "string",
          description: "Name of the approver"
        }
      },
      example: [{
        approverId: "USR-001",
        approverType: "Admin",
        approverName: "John Doe",
        _id: "67516dc5db0832d3a8dec573"
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
        acknowledgerType: {
          type: "string",
          description: "Type of acknowledger"
        },
        acknowledgerName: {
          type: "string",
          description: "Name of the acknowledger"
        }
      },
      example: [{
        acknowledgerId: "USR-002",
        acknowledgerType: "User",
        acknowledgerName: "Jane Smith",
        _id: "67516dc5db0832d3a8dec574"
      }]
    },
    {
      name: "isNotificationToWhatsapp",
      type: "Boolean",
      description: "Whether WhatsApp notifications are enabled",
      example: false
    },
    {
      name: "isNotificationToEmail",
      type: "Boolean",
      description: "Whether email notifications are enabled",
      example: false
    },
    {
      name: "isReminder",
      type: "Boolean",
      description: "Whether reminders are enabled",
      example: false
    },
    {
      name: "approvalReminders",
      type: "Array",
      description: "Array of approval reminders",
      properties: {
        reminderId: {
          type: "string",
          description: "Unique identifier for the reminder",
          required: true
        },
        reminderMessage: {
          type: "string",
          description: "Message to be sent with the reminder",
          required: true
        },
        reminderAt: {
          type: "date",
          description: "Date and time when the reminder should be sent",
          required: true
        }
      },
      example: [{
        reminderId: "REM-001",
        reminderMessage: "Please review the pending workflow",
        reminderAt: "2024-12-10T09:00:00.000Z",
        _id: "67516dc5db0832d3a8dec575"
      }]
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
    "message": "Workflows fetched successfully.",
    "data": [
        {
            "_id": "67516dc5db0832d3a8dec572",
            "workflowId": "c0a98df9fa0d",
            "organizationId": "c743f08873ef",
            "name": "Test Workflow Admin Microservices",
            "description": "test",
            "workflowType": "APPROVAL_ONLY",
            "workflowDocumentType": "DOCUMENT",
            "isWorkflowEform": true,
            "workflowTags": ["Katalog"],
            "approvers": [
                {
                    "approverId": "USR-001",
                    "approverType": "Admin",
                    "approverName": "John Doe",
                    "_id": "67516dc5db0832d3a8dec573"
                }
            ],
            "acknowledgers": [
                {
                    "acknowledgerId": "USR-002",
                    "acknowledgerType": "User",
                    "acknowledgerName": "Jane Smith",
                    "_id": "67516dc5db0832d3a8dec574"
                }
            ],
            "isNotificationToWhatsapp": false,
            "isNotificationToEmail": false,
            "isReminder": false,
            "approvalReminders": [
                {
                    "reminderId": "REM-001",
                    "reminderMessage": "Please review the pending workflow",
                    "reminderAt": "2024-12-10T09:00:00.000Z",
                    "_id": "67516dc5db0832d3a8dec575"
                }
            ],
            "createdDate": "2024-12-05T09:09:25.409Z"
        }
    ]
}
``` 