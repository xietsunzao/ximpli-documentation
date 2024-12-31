---
sidebar_position: 5
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Delete Eform

<HttpMethod method="DELETE" /> `/v1/eform/delete/{eformId}`

Delete an existing eform.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "eformId",
      type: "String",
      required: true,
      description: "ID of the eform to delete"
    }
  ]}
/>

## Example Request

<CodeTabs examples={{
  "curl": `curl -X DELETE 'https://api.ximpli-me.com/v1/eform/delete/67517284db0832d3a8dec606' \\
-H 'Authorization: Bearer YOUR_API_KEY'`,

  "python": `import requests

url = "https://api.ximpli-me.com/v1/eform/delete/67517284db0832d3a8dec606"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.delete(url, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

axios.delete('https://api.ximpli-me.com/v1/eform/delete/67517284db0832d3a8dec606', {
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));`,

  "go": `package main

import (
    "fmt"
    "net/http"
)

func main() {
    client := &http.Client{}
    req, err := http.NewRequest("DELETE", "https://api.ximpli-me.com/v1/eform/delete/67517284db0832d3a8dec606", nil)
    if err != nil {
        panic(err)
    }

    req.Header.Add("Authorization", "Bearer YOUR_API_KEY")

    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()
}`
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
    "message": "Eform deleted successfully"
}
```

## Example Error Response

```json
{
    "message": "Eform not found",
    "error": "Not Found",
    "statusCode": 404
}
```