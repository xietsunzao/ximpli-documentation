---
sidebar_position: 2
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import EndpointSelector from '@site/src/components/EndpointSelector';
import ResponseTable from '@site/src/components/ResponseTable';

# Get Organization

This endpoint retrieves an organization by its ID or organization code.

<EndpointSelector
  endpoints={[
    {
      name: "Get by ID",
      method: "GET",
      path: "/v1/organization/{organizationId}",
      description: "Retrieve an organization using its unique identifier",
      parameters: [
        {
          name: "organizationId",
          type: "string",
          required: "Required",
          description: "The unique identifier of the organization"
        }
      ],
      examples: {
        curl: `curl -X GET 'https://api.ximpli-me.com/v1/organization/c743f08873ef' \\
-H 'Authorization: Bearer YOUR_API_KEY'`,
        go: `package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    client := &http.Client{}
    req, err := http.NewRequest("GET", "https://api.ximpli-me.com/v1/organization/c743f08873ef", nil)
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
        python: `import requests

url = "https://api.ximpli-me.com/v1/organization/c743f08873ef"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, headers=headers)
print(response.json())`,
        nodejs: `const axios = require('axios');

const config = {
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
};

axios.get('https://api.ximpli-me.com/v1/organization/c743f08873ef', config)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,
        php: `<?php

$client = new GuzzleHttp\\Client();

$response = $client->get('https://api.ximpli-me.com/v1/organization/c743f08873ef', [
    'headers' => [
        'Authorization' => 'Bearer YOUR_API_KEY'
    ]
]);

echo $response->getBody();`
      }
    },
    {
      name: "Get by Code",
      method: "GET",
      path: "/v1/organization/code/{organizationCode}",
      description: "Retrieve an organization using its organization code",
      parameters: [
        {
          name: "organizationCode",
          type: "string",
          required: "Required",
          description: "The organization code"
        }
      ],
      examples: {
        curl: `curl -X GET 'https://api.ximpli-me.com/v1/organization/code/1G5CNM6E' \\
-H 'Authorization: Bearer YOUR_API_KEY'`,
        go: `package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    client := &http.Client{}
    req, err := http.NewRequest("GET", "https://api.ximpli-me.com/v1/organization/code/1G5CNM6E", nil)
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
        python: `import requests

url = "https://api.ximpli-me.com/v1/organization/code/1G5CNM6E"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, headers=headers)
print(response.json())`,
        nodejs: `const axios = require('axios');

const config = {
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
};

axios.get('https://api.ximpli-me.com/v1/organization/code/1G5CNM6E', config)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,
        php: `<?php

$client = new GuzzleHttp\\Client();

$response = $client->get('https://api.ximpli-me.com/v1/organization/code/1G5CNM6E', [
    'headers' => [
        'Authorization' => 'Bearer YOUR_API_KEY'
    ]
]);

echo $response->getBody();`
      }
    }
  ]}
/>

## Response Parameters

| Parameter | Type | Description |
|-|-|-|
| `statusCode` | `number` | HTTP status code of the response |
| `message` | `string` | Success/error message |
| `data` | `object` | Organization object |

## Data Object Response

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
      example: "sdfdsf"
    },
    {
      name: "description",
      type: "String",
      description: "Organization description",
      example: "sdfsdfsd"
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
        fullName: "TES002",
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

## Example Response

```json
{
    "statusCode": 200,
    "message": "Organization fetched successfully.",
    "data": {
        "_id": "67385af2066d3d537baa79ad",
        "organizationId": "c743f08873ef",
        "name": "sdfdsf", 
        "description": "sdfsdfsd",
        "isActive": true,
        "groupManager": [
            {
                "managerId": "7441917fb947",
                "referenceId": "3",
                "fullName": "TES002",
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