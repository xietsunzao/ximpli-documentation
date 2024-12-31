---
sidebar_position: 4
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Update Organization

<HttpMethod method="PUT" /> `/v1/organization/update/{organizationId}`

This endpoint updates an existing organization.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "organizationId",
      type: "String",
      required: true,
      location: "path",
      description: "The ID of the organization to update"
    },
    {
      name: "name",
      type: "String",
      required: true,
      location: "body",
      description: "Organization name"
    },
    {
      name: "description",
      type: "String",
      required: false,
      location: "body",
      description: "Organization description"
    },
    {
      name: "isActive",
      type: "Boolean",
      required: false,
      location: "body",
      description: "Organization status"
    },
    {
      name: "groupManager",
      type: "Array",
      required: true,
      location: "body",
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
      }
    },
    {
      name: "isParent",
      type: "Boolean",
      required: true,
      location: "body",
      description: "Parent organization flag"
    },
    {
      name: "parentOrganizationId",
      type: "String",
      required: false,
      isConditional: true,
      location: "body",
      description: "Parent organization identifier (Required when isParent is true)"
    }
  ]}
/>

## Response Parameters

<ResponseTable
  parameters={[
    {
      name: "statusCode",
      type: "number",
      description: "HTTP status code of the response"
    },
    {
      name: "message",
      type: "string",
      description: "Success/error message"
    },
    {
      name: "data",
      type: "object",
      description: "Updated organization object"
    }
  ]}
/>

## Example Request

<CodeTabs examples={{
  "curl": `curl -X PUT 'https://api.ximpli-me.com/v1/organization/update/c743f08873ef' \\
-H 'Authorization: Bearer YOUR_API_KEY' \\
-H 'Content-Type: application/json' \\
-d '{
  "name": "Updated Organization",
  "description": "Updated Description",
  "isActive": true,
  "groupManager": [
    {
      "managerId": "7441917fb947",
      "referenceId": "3",
      "fullName": "New Manager Name",
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
        "name": "Updated Organization",
        "description": "Updated Description",
        "isActive": true,
        "groupManager": []map[string]interface{}{
            {
                "managerId": "7441917fb947",
                "referenceId": "3",
                "fullName": "New Manager Name",
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

    req, err := http.NewRequest("PUT", "https://api.ximpli-me.com/v1/organization/update/c743f08873ef", bytes.NewBuffer(jsonData))
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

url = "https://api.ximpli-me.com/v1/organization/update/c743f08873ef"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "name": "Updated Organization",
    "description": "Updated Description",
    "isActive": True,
    "groupManager": [
        {
            "managerId": "7441917fb947",
            "referenceId": "3",
            "fullName": "New Manager Name",
            "role": "HEAD OF MARKETING"
        }
    ],
    "isParent": False,
    "parentOrganizationId": "d9b3d018fa54"
}

response = requests.put(url, json=data, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const data = {
  name: "Updated Organization",
  description: "Updated Description",
  isActive: true,
  groupManager: [
    {
      managerId: "7441917fb947",
      referenceId: "3",
      fullName: "New Manager Name",
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

axios.put('https://api.ximpli-me.com/v1/organization/update/c743f08873ef', data, config)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$data = [
    'name' => 'Updated Organization',
    'description' => 'Updated Description',
    'isActive' => true,
    'groupManager' => [
        [
            'managerId' => '7441917fb947',
            'referenceId' => '3',
            'fullName' => 'New Manager Name',
            'role' => 'HEAD OF MARKETING'
        ]
    ],
    'isParent' => false,
    'parentOrganizationId' => 'd9b3d018fa54'
];

$response = $client->put('https://api.ximpli-me.com/v1/organization/update/c743f08873ef', [
    'headers' => [
        'Authorization' => 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    ],
    'json' => $data
]);

echo $response->getBody();`
}} />

## Response Parameters

| Parameter | Type | Description |
|-|-|-|
| `statusCode` | `Number` | HTTP status code of the response |
| `message` | `String` | Success/error message |
| `data` | `Object` | Updated organization object |

## Example Response

```json
{
    "statusCode": 200,
    "message": "Organization updated successfully.",
    "data": {
        "apiKeyHistory": [],
        "_id": "67385af2066d3d537baa79ad",
        "organizationId": "c743f08873ef",
        "name": "Updated Organization",
        "description": "Updated Description",
        "isActive": true,
        "groupManager": [
            {
                "managerId": "7441917fb947",
                "referenceId": "3",
                "fullName": "New Manager Name",
                "role": "HEAD OF MARKETING"
            }
        ],
        "organizationCode": "1G5CNM6E",
        "isParent": false,
        "parentOrganizationId": "d9b3d018fa54",
        "updatedDate": "2024-11-16T10:42:26.748Z"
    }
}
``` 