---
sidebar_position: 6
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Get Eform Status

<HttpMethod method="GET" /> `/v1/eform/status/{identifier}`

Get the submission status and basic information of an eform.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "identifier",
      type: "String",
      required: true,
      location: "path",
      description: "The ID or slug of the eform"
    }
  ]}
/>

## Example Request

<CodeTabs examples={{
  "curl": `curl -X GET 'https://api.ximpli-me.com/v1/eform/status/test-eform-simple' \\
-H 'Authorization: Bearer YOUR_API_KEY'`,

  "python": `import requests

url = "https://api.ximpli-me.com/v1/eform/status/test-eform-simple"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, headers=headers)
print(response.json())`,

  "nodejs": `const axios = require('axios');

axios.get('https://api.ximpli-me.com/v1/eform/status/test-eform-simple', {
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));`
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
      description: "Eform status information",
      properties: {
        eformId: {
          type: "String",
          description: "Unique identifier for the eform"
        },
        title: {
          type: "String",
          description: "Title of the eform"
        },
        slug: {
          type: "String",
          description: "URL-friendly version of the title"
        },
        eformDescription: {
          type: "String",
          description: "Description of the eform"
        },
        isEformSubmitted: {
          type: "Boolean",
          description: "Whether the form has been submitted"
        },
        allowEdit: {
          type: "Boolean",
          description: "Whether submitted answers can be edited"
        },
        totalSubmission: {
          type: "Number",
          description: "Total number of submissions"
        },
        createdDate: {
          type: "String",
          description: "Creation timestamp"
        }
      }
    }
  ]}
/>

## Example Success Response

```json
{
    "statusCode": 200,
    "message": "Success",
    "data": {
        "eformId": "1733390980372a8331481fb4b",
        "title": "Test Eform Simple",
        "slug": "test-eform-simple",
        "eformDescription": "",
        "isEformSubmitted": true,
        "allowEdit": true,
        "totalSubmission": 1,
        "createdDate": "2024-12-05T09:29:40.405Z"
    }
}
```

## Error Response

```json
{
    "statusCode": 404,
    "message": "Eform not found"
}
```

This error occurs when:
- The eform with the specified ID or slug does not exist
- The eform has been deleted 