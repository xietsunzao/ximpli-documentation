---
sidebar_position: 4
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Update Eform

<HttpMethod method="PUT" /> `/v1/eform/update/{eformId}`

Update an existing eform with new configuration and questions.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "eformId",
      type: "String",
      required: true,
      location: "path",
      description: "The ID of the eform to update"
    },
    {
      name: "title",
      type: "String",
      required: true,
      description: "Title of the eform"
    },
    {
      name: "slug",
      type: "String",
      required: true,
      description: "URL-friendly version of the title (must be unique and follow slug format)"
    },
    {
      name: "eformDescription",
      type: "String",
      required: false,
      description: "Description of the eform"
    },
    {
      name: "workflowId",
      type: "String",
      isConditional: true,
      description: "ID of the workflow (Required if isContinueToWorkflow is true)"
    },
    {
      name: "eformType",
      type: "String",
      required: true,
      description: "Type of eform (PRIVATE or PUBLIC)"
    },
    {
      name: "isActive",
      type: "Boolean",
      required: true,
      description: "Whether the eform is active"
    },
    {
      name: "questions",
      type: "Array",
      required: false,
      description: "Array of question objects",
      properties: {
        questionId: {
          type: "String",
          description: "Unique identifier for the question",
          required: true
        },
        questionTitle: {
          type: "String",
          description: "Title of the question",
          required: true
        },
        questionType: {
          type: "String",
          description: "Type of question (text, number, radio_button, check_box, select_box, file, image, multiple, time, date)",
          required: true
        },
        isMandatory: {
          type: "Boolean",
          description: "Whether the question is mandatory",
          required: true
        },
        isUnique: {
          type: "Boolean",
          description: "Whether the answer must be unique",
          required: true
        },
        isAttachment: {
          type: "Boolean",
          description: "Whether the question allows file attachments",
          required: true
        },
        suggestionAnswer: {
          type: "String",
          description: "Suggested answer for the question",
          required: false
        },
        options: {
          type: "Array",
          description: "Array of options for radio_button type questions",
          required: false,
          properties: {
            option: {
              type: "String",
              description: "Option text",
              required: true
            }
          }
        }
      }
    },
    {
      name: "isContinueToWorkflow",
      type: "Boolean",
      required: true,
      description: "Whether to continue to workflow after submission"
    },
    {
      name: "reminderToOtherXimpliUser",
      type: "Array",
      required: false,
      description: "Array of user IDs to remind"
    },
    {
      name: "isMobileUsed",
      type: "Boolean",
      required: false,
      description: "Whether the form can be used on mobile devices"
    },
    {
      name: "isActivateAutoGenerate",
      type: "Boolean",
      required: false,
      description: "Whether to activate auto-generation"
    },
    {
      name: "autoGenerateBase64",
      type: "String",
      isConditional: true,
      description: "Base64 encoded DOCX file (Required if isActivateAutoGenerate is true)"
    },
    {
      name: "isOneTimeSubmit",
      type: "Boolean",
      required: false,
      description: "Whether the form can only be submitted once"
    },
    {
      name: "allowEdit",
      type: "Boolean",
      required: false,
      description: "Whether submitted answers can be edited"
    },
    {
      name: "afterSubmitMessage",
      type: "String",
      required: false,
      description: "Message to show after form submission"
    },
    {
      name: "welcomePage",
      type: "String",
      required: false,
      description: "Welcome message for the form"
    },
    {
      name: "deadlineSubmission",
      type: "String",
      required: false,
      description: "Submission deadline date (ISO 8601 format)"
    }
  ]}
/>

## Example Request

<CodeTabs examples={{
  "curl": `curl -X PUT 'https://api.ximpli-me.com/v1/eform/update/67516dc5db0832d3a8dec573' \\
-H 'Authorization: Bearer YOUR_API_KEY' \\
-H 'Content-Type: application/json' \\
-d '{
    "title": "Updated Eform Title",
    "eformDescription": "Updated description",
    "isActive": true,
    "questions": [
        {
            "questionTitle": "What is your name?",
            "questionType": "text",
            "isMandatory": true
        }
    ]
}'`,
  "python": `import requests

url = "https://api.ximpli-me.com/v1/eform/update/67516dc5db0832d3a8dec573"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "title": "Updated Eform Title",
    "eformDescription": "Updated description",
    "isActive": True,
    "questions": [
        {
            "questionTitle": "What is your name?",
            "questionType": "text",
            "isMandatory": True
        }
    ]
}

response = requests.put(url, json=data, headers=headers)
print(response.json())`,
  "nodejs": `const axios = require('axios');

const data = {
    title: "Updated Eform Title",
    eformDescription: "Updated description",
    isActive: true,
    questions: [
        {
            questionTitle: "What is your name?",
            questionType: "text",
            isMandatory: true
        }
    ]
};

const config = {
    headers: { 
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
};

axios.put('https://api.ximpli-me.com/v1/eform/update/67516dc5db0832d3a8dec573', data, config)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));`
}}
/>

## Response Parameters

| Parameter | Type | Description |
|-|-|-|
| `statusCode` | `number` | HTTP status code of the response |
| `message` | `string` | Success/error message |
| `data` | `object` | Updated eform object |

## Data Object Response

<ResponseTable
  parameters={[
    {
      name: "_id",
      type: "String",
      description: "Internal ID of the eform"
    },
    {
      name: "eformId",
      type: "String",
      description: "Unique identifier for the eform"
    },
    {
      name: "title",
      type: "String",
      description: "Title of the eform"
    },
    {
      name: "slug",
      type: "String",
      description: "URL-friendly version of the title"
    },
    {
      name: "eformDescription",
      type: "String",
      description: "Description of the eform"
    },
    {
      name: "workflowId",
      type: "String",
      description: "Associated workflow ID"
    },
    {
      name: "eformType",
      type: "String",
      description: "Type of eform (PRIVATE or PUBLIC)"
    },
    {
      name: "isActive",
      type: "Boolean",
      description: "Whether the eform is active"
    },
    {
      name: "questions",
      type: "Array",
      description: "Array of questions in the eform"
    },
    {
      name: "isContinueToWorkflow",
      type: "Boolean",
      description: "Whether to continue to workflow after submission"
    },
    {
      name: "createdDate",
      type: "String",
      description: "Creation timestamp"
    },
    {
      name: "updatedDate",
      type: "String",
      description: "Last update timestamp"
    }
  ]}
/>

## Example Success Response

```json
{
    "statusCode": 200,
    "message": "Eform updated successfully",
    "data": {
        "_id": "67517284db0832d3a8dec606",
        "eformId": "1733390980372a8331481fb4b",
        "title": "Updated Eform Title",
        "slug": "updated-eform-title",
        "eformDescription": "Updated description",
        "workflowId": "c0a98df9fa0d",
        "eformType": "PRIVATE",
        "isActive": true,
        "questions": [
            {
                "questionId": "a937ea8f",
                "questionTitle": "What is your name?",
                "questionType": "text",
                "isMandatory": true,
                "isUnique": false,
                "isAttachment": false,
                "options": []
            }
        ],
        "isContinueToWorkflow": true,
        "createdDate": "2024-12-05T09:29:40.405Z",
        "updatedDate": "2024-12-05T10:15:22.123Z"
    }
}
```

## Error Responses

```json
{
    "statusCode": 404,
    "message": "Eform not found"
}
```

```json
{
    "message": [
        "questions.0.questionTitle must be a string"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
```