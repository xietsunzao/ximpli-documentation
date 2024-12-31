---
sidebar_position: 1
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import ResponseTable from '@site/src/components/ResponseTable';

# Get All Organizations

<HttpMethod method="GET" /> `/v1/organizations`

This endpoint retrieves a list of all organizations.


## Example Request

<CodeTabs examples={{
  "curl": "curl -X GET 'https://api.ximpli-me.com/v1/organizations' \\\n-H 'Authorization: Bearer YOUR_API_KEY'",
  
  "go": "package main\n\nimport (\n    \"fmt\"\n    \"net/http\"\n    \"io/ioutil\"\n)\n\nfunc main() {\n    client := &http.Client{}\n    req, err := http.NewRequest(\"GET\", \"https://api.ximpli-me.com/v1/organizations\", nil)\n    if err != nil {\n        panic(err)\n    }\n\n    req.Header.Add(\"Authorization\", \"Bearer YOUR_API_KEY\")\n\n    resp, err := client.Do(req)\n    if err != nil {\n        panic(err)\n    }\n    defer resp.Body.Close()\n\n    body, _ := ioutil.ReadAll(resp.Body)\n    fmt.Println(string(body))\n}",

  "python": "import requests\n\nurl = \"https://api.ximpli-me.com/v1/organizations\"\nheaders = {\n    \"Authorization\": \"Bearer YOUR_API_KEY\"\n}\n\nresponse = requests.get(url, headers=headers)\nprint(response.json())",

  "nodejs": "const axios = require('axios');\n\nconst config = {\n  headers: { 'Authorization': 'Bearer YOUR_API_KEY' }\n};\n\naxios.get('https://api.ximpli-me.com/v1/organizations', config)\n  .then(response => console.log(response.data))\n  .catch(error => console.error(error));",

  "php": "<?php\n\n$client = new GuzzleHttp\\Client();\n\n$response = $client->get('https://api.ximpli-me.com/v1/organizations', [\n    'headers' => [\n        'Authorization' => 'Bearer YOUR_API_KEY'\n    ]\n]);\n\necho $response->getBody();"
}} />

## Response Parameters

| Field | Type | Description |
|-|-|-|
| `statusCode` | `Number` | HTTP status code of the response |
| `message` | `String` | Success/error message |
| `data` | `Array Object` | Array of organization objects |

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
    "message": "Organizations fetched successfully.",
    "data": [
        {
            "apiKeyHistory": [],
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
    ]
}
```