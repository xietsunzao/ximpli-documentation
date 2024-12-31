---
sidebar_position: 3
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Create Workflow

<HttpMethod method="POST" /> `/v1/workflow`

This endpoint creates a new workflow.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "name",
      type: "String",
      required: true,
      location: "body",
      description: "Name of the workflow"
    },
    {
      name: "description",
      type: "String",
      required: false,
      location: "body",
      description: "Description of the workflow"
    },
    {
      name: "workflowType",
      type: "String",
      required: true,
      location: "body",
      description: "Type of workflow (APPROVAL_ONLY, ACKNOWLEDGE_ONLY, APPROVAL_AND_ACKNOWLEDGE)"
    },
    {
      name: "workflowDocumentType",
      type: "String",
      required: true,
      location: "body",
      description: "Type of document (DOCUMENT, NON_DOCUMENT)"
    },
    {
      name: "isWorkflowEform",
      type: "Boolean",
      required: true,
      location: "body",
      description: "Whether this workflow is for eforms"
    },
    {
      name: "workflowTags",
      type: "Array",
      required: true,
      location: "body",
      description: "Array of tags associated with the workflow"
    },
    {
      name: "approvers",
      type: "Array",
      required: false,
      isConditional: true,
      location: "body",
      description: "Array of workflow approvers (Required when workflowType is APPROVAL_ONLY or APPROVAL_AND_ACKNOWLEDGE)",
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
      }
    },
    {
      name: "acknowledgers",
      type: "Array",
      required: false,
      isConditional: true,
      location: "body",
      description: "Array of workflow acknowledgers (Required when workflowType is ACKNOWLEDGE_ONLY or APPROVAL_AND_ACKNOWLEDGE)",
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
      }
    },
    {
      name: "approvalReminders",
      type: "Object",
      required: false,
      location: "body",
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
      }
    }
  ]}
/>

## Example Request

<CodeTabs examples={{
  "curl": `curl -X POST 'https://api.ximpli-me.com/v1/workflow' \\
-H 'Authorization: Bearer YOUR_API_KEY' \\
-H 'Content-Type: application/json' \\
-d '{
    "name": "Document Approval",
    "description": "Standard document approval workflow",
    "workflowType": "APPROVAL_ONLY",
    "workflowDocumentType": "DOCUMENT",
    "isWorkflowEform": true,
    "workflowTags": ["Approval", "Document"],
    "approvers": [
        {
            "approverId": "7441917fb947",
            "referenceId": "3",
            "fullName": "John Doe",
            "role": "HEAD OF DEPARTMENT"
        }
    ],
    "approvalReminders": {
        "enabled": true,
        "frequency": "DAILY",
        "maxReminders": 3
    }
}'`,

  "python": `import requests
import json

url = "https://api.ximpli-me.com/v1/workflow"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "name": "Document Approval",
    "description": "Standard document approval workflow",
    "workflowType": "APPROVAL_ONLY",
    "workflowDocumentType": "DOCUMENT",
    "isWorkflowEform": True,
    "workflowTags": ["Approval", "Document"],
    "approvers": [
        {
            "approverId": "7441917fb947",
            "referenceId": "3",
            "fullName": "John Doe",
            "role": "HEAD OF DEPARTMENT"
        }
    ],
    "approvalReminders": {
        "enabled": True,
        "frequency": "DAILY",
        "maxReminders": 3
    }
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const data = {
    name: "Document Approval",
    description: "Standard document approval workflow",
    workflowType: "APPROVAL_ONLY",
    workflowDocumentType: "DOCUMENT",
    isWorkflowEform: true,
    workflowTags: ["Approval", "Document"],
    approvers: [
        {
            approverId: "7441917fb947",
            referenceId: "3",
            fullName: "John Doe",
            role: "HEAD OF DEPARTMENT"
        }
    ],
    approvalReminders: {
        enabled: true,
        frequency: "DAILY",
        maxReminders: 3
    }
};

const config = {
    headers: { 
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
};

axios.post('https://api.ximpli-me.com/v1/workflow', data, config)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));`,

  "go": `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    data := map[string]interface{}{
        "name": "Document Approval",
        "description": "Standard document approval workflow",
        "workflowType": "APPROVAL_ONLY",
        "workflowDocumentType": "DOCUMENT",
        "isWorkflowEform": true,
        "workflowTags": []string{"Approval", "Document"},
        "approvers": []map[string]string{
            {
                "approverId": "7441917fb947",
                "referenceId": "3",
                "fullName": "John Doe",
                "role": "HEAD OF DEPARTMENT",
            },
        },
        "approvalReminders": map[string]interface{}{
            "enabled": true,
            "frequency": "DAILY",
            "maxReminders": 3,
        },
    }
    
    jsonData, err := json.Marshal(data)
    if err != nil {
        panic(err)
    }

    client := &http.Client{}
    req, err := http.NewRequest("POST", "https://api.ximpli-me.com/v1/workflow", bytes.NewBuffer(jsonData))
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

    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$response = $client->post('https://api.ximpli-me.com/v1/workflow', [
    'headers' => [
        'Authorization' => 'Bearer YOUR_API_KEY',
        'Content-Type' => 'application/json'
    ],
    'json' => [
        'name' => 'Document Approval',
        'description' => 'Standard document approval workflow',
        'workflowType' => 'APPROVAL_ONLY',
        'workflowDocumentType' => 'DOCUMENT',
        'isWorkflowEform' => true,
        'workflowTags' => ['Approval', 'Document'],
        'approvers' => [
            [
                'approverId' => '7441917fb947',
                'referenceId' => '3',
                'fullName' => 'John Doe',
                'role' => 'HEAD OF DEPARTMENT'
            ]
        ],
        'approvalReminders' => [
            'enabled' => true,
            'frequency' => 'DAILY',
            'maxReminders' => 3
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
      description: "Created workflow object"
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
    "statusCode": 201,
    "message": "Workflow created successfully",
    "data": {
        "_id": "67516dc5db0832d3a8dec572",
        "workflowId": "c743f08873ef",
        "name": "Document Approval",
        "description": "Standard document approval workflow",
        "workflowType": "APPROVAL_ONLY",
        "workflowDocumentType": "DOCUMENT",
        "isWorkflowEform": true,
        "workflowTags": ["Approval", "Document"],
        "approvers": [
            {
                "approverId": "7441917fb947",
                "referenceId": "3",
                "fullName": "John Doe",
                "role": "HEAD OF DEPARTMENT"
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
    "statusCode": 400,
    "message": [
        "name should not be empty",
        "workflowType must be one of the following values: APPROVAL_ONLY, ACKNOWLEDGE_ONLY, APPROVAL_AND_ACKNOWLEDGE",
        "approvers should not be empty"
    ]
}
``` 