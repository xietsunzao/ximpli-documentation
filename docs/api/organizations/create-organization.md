---
sidebar_position: 3
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Create Organization

<HttpMethod method="POST" /> `/v1/organization/create`

This endpoint creates a new organization.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "name",
      type: "String",
      required: true,
      description: "Organization name"
    },
    {
      name: "description",
      type: "String",
      required: false,
      description: "Organization description"
    },
    {
      name: "isActive",
      type: "Boolean",
      required: false,
      description: "Organization status"
    },
    {
      name: "groupManager",
      type: "Array",
      required: true,
      description: "List of group managers",
      properties: {
        managerId: {
          type: "string",
          description: "Unique identifier for the manager",
          required: true
        },
        referenceId: {
          type: "string",
          description: "Reference identifier for the manager",
          required: true
        },
        fullName: {
          type: "string",
          description: "Full name of the manager",
          required: true
        },
        role: {
          type: "string",
          description: "Role of the manager in the organization",
          required: true
        }
      },
      example: [{
        managerId: "7441917fb947",
        referenceId: "3",
        fullName: "Manager Name",
        role: "HEAD OF MARKETING"
      }]
    },
    {
      name: "isParent",
      type: "Boolean",
      required: true,
      description: "Parent organization flag"
    },
    {
      name: "parentOrganizationId",
      type: "String",
      required: false,
      isConditional: true,
      description: "Parent organization identifier (Required when isParent is true)"
    }
  ]}
/>

## Example Request

<CodeTabs examples={{
  "curl": `curl -X POST 'https://api.ximpli-me.com/v1/organization/create' \\
-H 'Authorization: Bearer YOUR_API_KEY' \\
-H 'Content-Type: application/json' \\
-d '{
  "name": "New Organization",
  "description": "Description",
  "isActive": true,
  "groupManager": [
    {
      "managerId": "7441917fb947",
      "referenceId": "3",
      "fullName": "Manager Name",
      "role": "HEAD OF MARKETING"
    }
  ],
  "isParent": false,
  "parentOrganizationId": "d9b3d018fa54"
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
        "name": "New Organization",
        "description": "Description",
        "isActive": true,
        "groupManager": []map[string]interface{}{
            {
                "managerId": "7441917fb947",
                "referenceId": "3",
                "fullName": "Manager Name",
                "role": "HEAD OF MARKETING",
            },
        },
        "isParent": false,
        "parentOrganizationId": "d9b3d018fa54",
    }

    jsonData, err := json.Marshal(data)
    if err != nil {
        panic(err)
    }

    req, err := http.NewRequest("POST", "https://api.ximpli-me.com/v1/organization/create", bytes.NewBuffer(jsonData))
    if err != nil {
        panic(err)
    }

    req.Header.Add("Authorization", "Bearer YOUR_API_KEY")
    req.Header.Add("Content-Type", "application/json")

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    fmt.Println("Response Status:", resp.Status)
}`,

  "python": `import requests

url = "https://api.ximpli-me.com/v1/organization/create"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "name": "New Organization",
    "description": "Description",
    "isActive": True,
    "groupManager": [
        {
            "managerId": "7441917fb947",
            "referenceId": "3",
            "fullName": "Manager Name",
            "role": "HEAD OF MARKETING"
        }
    ],
    "isParent": False,
    "parentOrganizationId": "d9b3d018fa54"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const data = {
  name: "New Organization",
  description: "Description",
  isActive: true,
  groupManager: [
    {
      managerId: "7441917fb947",
      referenceId: "3",
      fullName: "Manager Name",
      role: "HEAD OF MARKETING"
    }
  ],
  isParent: false,
  parentOrganizationId: "d9b3d018fa54"
};

const config = {
  headers: { 
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
};

axios.post('https://api.ximpli-me.com/v1/organization/create', data, config)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$data = [
    'name' => 'New Organization',
    'description' => 'Description',
    'isActive' => true,
    'groupManager' => [
        [
            'managerId' => '7441917fb947',
            'referenceId' => '3',
            'fullName' => 'Manager Name',
            'role' => 'HEAD OF MARKETING'
        ]
    ],
    'isParent' => false,
    'parentOrganizationId' => 'd9b3d018fa54'
];

$response = $client->post('https://api.ximpli-me.com/v1/organization/create', [
    'headers' => [
        'Authorization' => 'Bearer YOUR_API_KEY',
        'Content-Type' => 'application/json'
    ],
    'json' => $data
]);

echo $response->getBody();`
}} />

## Response Parameters

<ResponseTable
  parameters={[
    {
      name: "_id",
      type: "String",
      description: "Unique identifier",
      example: "67385af2066d3d537baa79ad"
    },
    {
      name: "organizationId",
      type: "String",
      description: "Organization identifier",
      example: "c743f08873ef"
    },
    {
      name: "name",
      type: "String",
      description: "Organization name",
      example: "New Organization"
    },
    {
      name: "description",
      type: "String",
      description: "Organization description",
      example: "Description"
    },
    {
      name: "isActive",
      type: "Boolean",
      description: "Organization status",
      example: true
    },
    {
      name: "groupManager",
      type: "Array",
      description: "List of group managers",
      properties: {
        managerId: {
          type: "string",
          description: "Unique identifier for the manager"
        },
        referenceId: {
          type: "string",
          description: "Reference identifier for the manager"
        },
        fullName: {
          type: "string",
          description: "Full name of the manager"
        },
        role: {
          type: "string",
          description: "Role of the manager in the organization"
        }
      },
      example: [{
        managerId: "7441917fb947",
        referenceId: "3",
        fullName: "Manager Name",
        role: "HEAD OF MARKETING"
      }]
    },
    {
      name: "organizationCode",
      type: "String",
      description: "Organization code",
      example: "1G5CNM6E"
    },
    {
      name: "isParent",
      type: "Boolean",
      description: "Parent organization flag",
      example: false
    },
    {
      name: "parentOrganizationId",
      type: "String",
      description: "Parent organization identifier",
      example: "d9b3d018fa54"
    },
    {
      name: "createdDate",
      type: "String",
      description: "Creation timestamp",
      example: "2024-11-16T08:42:26.748Z"
    }
  ]}
/>

## Example Success Response

```json
{
    "statusCode": 201,
    "message": "Organization created successfully.",
    "data": {
        "apiKeyHistory": [],
        "_id": "67385af2066d3d537baa79ad",
        "organizationId": "c743f08873ef",
        "name": "New Organization",
        "description": "Description",
        "isActive": true,
        "groupManager": [
            {
                "managerId": "7441917fb947",
                "referenceId": "3",
                "fullName": "Manager Name",
                "role": "HEAD OF MARKETING"
            }
        ],
        "organizationCode": "1G5CNM6E",
        "isParent": false,
        "parentOrganizationId": "d9b3d018fa54",
        "createdDate": "2024-11-16T08:42:26.748Z"
    }
}
```

## Example Error Response

```json
{
    "message": [
        "groupManager should not be empty",
        "groupManager must be an array"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
```

This error occurs when:
- The `groupManager` field is missing or empty
- The `groupManager` field is not properly formatted as an array 