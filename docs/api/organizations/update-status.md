---
sidebar_position: 5
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Update Organization Status

<HttpMethod method="PATCH" /> `/v1/organization/status/{organizationId}`

Update the active status of an organization.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "organizationId",
      type: "string",
      description: "The unique identifier of the organization",
      required: true,
      in: "path"
    },
    {
      name: "isActive",
      type: "boolean",
      description: "The new status of the organization",
      required: true,
      in: "body"
    }
  ]}
/>

## Example Request

<CodeTabs
  examples={{
    "curl": `curl -X PATCH 'https://api.ximpli-me.com/v1/organization/status/d9b3d018fa54' \\
-H 'Authorization: Bearer YOUR_API_KEY' \\
-H 'Content-Type: application/json' \\
-d '{
    "isActive": false
}'`,

    "php": `<?php

$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_URL => "https://api.ximpli-me.com/v1/organization/status/d9b3d018fa54",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST => "PATCH",
    CURLOPT_HTTPHEADER => [
        "Authorization: Bearer YOUR_API_KEY",
        "Content-Type: application/json"
    ],
    CURLOPT_POSTFIELDS => json_encode([
        "isActive" => false
    ])
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error: " . $err;
} else {
    echo $response;
}`,

    "nodejs": `const axios = require('axios');

const config = {
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
};

const data = {
    isActive: false
};

axios.patch('https://api.ximpli-me.com/v1/organization/status/d9b3d018fa54', data, config)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));`,

    "python": `import requests

url = "https://api.ximpli-me.com/v1/organization/status/d9b3d018fa54"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "isActive": False
}

response = requests.patch(url, json=data, headers=headers)
print(response.json())`,

    "go": `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    url := "https://api.ximpli-me.com/v1/organization/status/d9b3d018fa54"
    data := map[string]bool{
        "isActive": false,
    }
    
    jsonData, err := json.Marshal(data)
    if err != nil {
        panic(err)
    }

    req, err := http.NewRequest("PATCH", url, bytes.NewBuffer(jsonData))
    if err != nil {
        panic(err)
    }

    req.Header.Set("Authorization", "Bearer YOUR_API_KEY")
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    fmt.Println(resp.Status)
}`
  }}
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
      description: "Updated organization object",
      properties: [
        {
          name: "_id",
          type: "string",
          description: "Internal identifier of the organization"
        },
        {
          name: "organizationId",
          type: "string",
          description: "Public identifier of the organization"
        },
        {
          name: "name",
          type: "string",
          description: "Name of the organization"
        },
        {
          name: "description",
          type: "string",
          description: "Description of the organization"
        },
        {
          name: "isActive",
          type: "boolean",
          description: "Updated active status of the organization"
        },
        {
          name: "groupManager",
          type: "array",
          description: "List of organization managers",
          properties: [
            {
              name: "fullName",
              type: "string",
              description: "Full name of the manager"
            },
            {
              name: "referenceId",
              type: "string",
              description: "Reference ID of the manager"
            },
            {
              name: "role",
              type: "string",
              description: "Role of the manager"
            }
          ]
        },
        {
          name: "organizationCode",
          type: "string",
          description: "Unique code of the organization"
        },
        {
          name: "isParent",
          type: "boolean",
          description: "Indicates if this is a parent organization"
        },
        {
          name: "parentOrganizationId",
          type: "string|null",
          description: "ID of the parent organization, if any"
        },
        {
          name: "apiKeyHistory",
          type: "array",
          description: "History of API key changes"
        },
        {
          name: "createdDate",
          type: "string",
          description: "Timestamp when the organization was created"
        }
      ]
    }
  ]}
/>

### Success Response

```json
{
    "statusCode": 200,
    "message": "Organization status updated successfully.",
    "data": {
        "_id": "67690a86ede7983cbc737a3c",
        "organizationId": "959a0014c48b",
        "name": "Acme Corp2",
        "description": "A description of the organization.",
        "isActive": false,
        "groupManager": [
            {
                "fullName": "Name 1",
                "referenceId": "1",
                "role": "admin"
            }
        ],
        "organizationCode": "XK8ZTASE",
        "isParent": true,
        "parentOrganizationId": null,
        "apiKeyHistory": [],
        "createdDate": "2024-12-23T07:00:22.480Z"
    }
}
```

### Error Response

```json
{
    "statusCode": 404,
    "message": "Organization not found"
}
```
