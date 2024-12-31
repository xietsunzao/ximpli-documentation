---
sidebar_position: 5
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Delete Organization

<HttpMethod method="DELETE" /> `/v1/organization/delete/{organizationId}`

This endpoint deletes an existing organization.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "organizationId",
      type: "String",
      required: true,
      location: "path",
      description: "The ID of the organization to delete"
    }
  ]}
/>

## Example Request

<CodeTabs examples={{
  "curl": `curl -X DELETE 'https://api.ximpli-me.com/v1/organization/delete/c743f08873ef' \\
-H 'Authorization: Bearer YOUR_API_KEY'`,

  "go": `package main

import (
    "fmt"
    "net/http"
)

func main() {
    req, err := http.NewRequest("DELETE", "https://api.ximpli-me.com/v1/organization/delete/c743f08873ef", nil)
    if err != nil {
        panic(err)
    }

    req.Header.Add("Authorization", "Bearer YOUR_API_KEY")

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    fmt.Println("Response Status:", resp.Status)
}`,

  "python": `import requests

url = "https://api.ximpli-me.com/v1/organization/delete/c743f08873ef"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.delete(url, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const config = {
  headers: { 
    'Authorization': 'Bearer YOUR_API_KEY'
  }
};

axios.delete('https://api.ximpli-me.com/v1/organization/delete/c743f08873ef', config)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$response = $client->delete('https://api.ximpli-me.com/v1/organization/delete/c743f08873ef', [
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
      type: "number",
      description: "HTTP status code of the response"
    },
    {
      name: "message",
      type: "string",
      description: "Success/error message"
    }
  ]}
/>

## Example Success Response

```json
{
    "statusCode": 200,
    "message": "Organization deleted successfully."
}
```

## Example Error Response

```json
{
    "message": "Organization not found",
    "statusCode": 404
}
```

This error occurs when:
- The organization with the specified ID does not exist
- The organization has already been deleted 