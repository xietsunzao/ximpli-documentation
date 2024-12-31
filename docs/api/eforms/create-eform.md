---
sidebar_position: 3
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';
import ResponseTable from '@site/src/components/ResponseTable';

# Create Eform

<HttpMethod method="POST" /> `/v1/eform/create`

Create a new eform with specified configuration and questions.

## Request Parameters

<RequestTable
  parameters={[
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
      name: "isContinueToWorkflow",
      type: "Boolean",
      required: false,
      description: "Whether to continue to workflow after submission"
    },
    {
      name: "questions",
      type: "Array",
      required: true,
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
      required: true,
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
      name: "createdDate",
      type: "String",
      required: false,
      description: "Creation date (ISO 8601 format)"
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
  "curl": `curl -X POST 'https://api.ximpli-me.com/v1/eform/create' \\
-H 'Authorization: Bearer YOUR_API_KEY' \\
-H 'Content-Type: application/json' \\
-d '{
    "title": "Test Ximpli Eform Demo",
    "workflowId": "c0a98df9fa0d",
    "eformType": "PRIVATE",
    "isActive": true,
    "questions": [
        {
            "questionTitle": "What is your name?",
            "questionType": "text",
            "isMandatory": true,
            "isUnique": true,
            "isAttachment": false,
            "suggestionAnswer": "John Doe"
        },
        {
            "questionTitle": "What is your phone number?",
            "questionType": "number",
            "isMandatory": true,
            "isUnique": true,
            "isAttachment": false,
            "suggestionAnswer": "John Doe"
        },
        {
            "questionTitle": "Select your gender",
            "questionType": "radio_button",
            "isMandatory": true,
            "isUnique": false,
            "isAttachment": false,
            "options": [
                {
                    "option": "Male"
                },
                {
                    "option": "Female"
                }
            ]
        }
    ],
    "isContinueToWorkflow": true,
    "reminderToOtherXimpliUser": [],
    "isMobileUsed": false,
    "isActivateAutoGenerate": false,
    "isOneTimeSubmit": false,
    "allowEdit": true,
    "afterSubmitMessage": "Thank you for submitting the form.",
    "welcomePage": "Welcome to the employee information form."
}'`,

  "python": `import requests
import json

url = "https://api.ximpli-me.com/v1/eform/create"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "title": "Test Ximpli Eform Demo",
    "workflowId": "c0a98df9fa0d",
    "eformType": "PRIVATE",
    "isActive": true,
    # ... rest of the request body
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`,

  "nodejs": `const axios = require('axios');

const data = {
    title: "Test Ximpli Eform Demo",
    workflowId: "c0a98df9fa0d",
    eformType: "PRIVATE",
    isActive: true,
    // ... rest of the request body
};

axios.post('https://api.ximpli-me.com/v1/eform/create', data, {
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));`
}} />

## Response Parameters

| Parameter | Type | Description |
|-|-|-|
| `statusCode` | `number` | HTTP status code of the response |
| `message` | `string` | Success/error message |
| `data` | `object` | Created eform object |

## Data Object Response

<ResponseTable
  parameters={[
    {
      name: "_id",
      type: "String",
      description: "Internal ID of the eform",
      example: "67517284db0832d3a8dec606"
    },
    {
      name: "eformId",
      type: "String",
      description: "Unique identifier for the eform",
      example: "1733390980372a8331481fb4b"
    },
    {
      name: "title",
      type: "String",
      description: "Title of the eform",
      example: "Test Eform Simple"
    },
    {
      name: "slug",
      type: "String",
      description: "URL-friendly version of the title",
      example: "test-eform-simple"
    },
    {
      name: "eformDescription",
      type: "String",
      description: "Description of the eform",
      example: ""
    },
    {
      name: "workflowId",
      type: "String",
      description: "Associated workflow ID",
      example: "c0a98df9fa0d"
    },
    {
      name: "workflow",
      type: "Object",
      description: "Associated workflow details",
      properties: {
        workflowId: {
          type: "string",
          description: "Workflow identifier"
        },
        name: {
          type: "string",
          description: "Workflow name"
        },
        description: {
          type: "string",
          description: "Workflow description"
        },
        workflowType: {
          type: "string",
          description: "Type of workflow"
        },
        documentType: {
          type: "string",
          description: "Type of document"
        }
      }
    },
    {
      name: "questions",
      type: "Array",
      description: "Array of questions in the eform",
      properties: {
        questionId: {
          type: "string",
          description: "Unique identifier for the question"
        },
        questionTitle: {
          type: "string",
          description: "Title of the question"
        },
        questionDescription: {
          type: "string",
          description: "Description of the question"
        },
        questionType: {
          type: "string",
          description: "Type of question (text, number, radio, checkbox, select, file, multiple)"
        },
        isMandatory: {
          type: "boolean",
          description: "Whether the question is required"
        },
        isUnique: {
          type: "boolean",
          description: "Whether the answer must be unique"
        },
        suggestionAnswer: {
          type: "string",
          description: "Suggested answer for the question"
        },
        isAttachment: {
          type: "boolean",
          description: "Whether file attachment is allowed"
        },
        attachmentFile: {
          type: "string",
          description: "Path to attached file"
        },
        allowedFileTypes: {
          type: "array",
          description: "List of allowed file types"
        },
        totalQuestions: {
          type: "number",
          description: "Total number of sub-questions"
        },
        options: {
          type: "array",
          description: "Available options for choice questions"
        },
        multipleQuestions: {
          type: "array",
          description: "Nested questions for multiple question type"
        }
      }
    },
    {
      name: "eformType",
      type: "String",
      description: "Type of eform (PRIVATE, PUBLIC)",
      example: "PRIVATE"
    },
    {
      name: "isActive",
      type: "Boolean",
      description: "Whether the eform is active",
      example: true
    },
    {
      name: "isContinueToWorkflow",
      type: "Boolean",
      description: "Whether to continue to workflow after submission",
      example: true
    },
    {
      name: "deadlineSubmission",
      type: "String",
      description: "Deadline for form submission",
      example: null
    },
    {
      name: "reminderToOtherXimpliUser",
      type: "Array",
      description: "List of users to remind",
      example: []
    },
    {
      name: "isMobileUsed",
      type: "Boolean",
      description: "Whether the form can be used on mobile",
      example: false
    },
    {
      name: "isActivateAutoGenerate",
      type: "Boolean",
      description: "Whether to auto-generate documents",
      example: true
    },
    {
      name: "autoGenerateFile",
      type: "String",
      description: "Path to auto-generated file template",
      example: "http://localhost:3000/document/eform/1733390980372a8331481fb4b/template/92d80bdc59f4.docx"
    },
    {
      name: "isOneTimeSubmit",
      type: "Boolean",
      description: "Whether the form can only be submitted once",
      example: false
    },
    {
      name: "allowEdit",
      type: "Boolean",
      description: "Whether submissions can be edited",
      example: true
    },
    {
      name: "afterSubmitMessage",
      type: "String",
      description: "Message to display after form submission",
      example: "<p class=\"mt-4 text-gray-500 dark:text-gray-400\">\r\n\r\n</p>"
    },
    {
      name: "welcomePage",
      type: "String",
      description: "Welcome page content",
      example: null
    },
    {
      name: "isEformSubmitted",
      type: "Boolean",
      description: "Whether the form has been submitted",
      example: false
    },
    {
      name: "totalSubmission",
      type: "Number",
      description: "Total number of submissions",
      example: 0
    },
    {
      name: "createdDate",
      type: "String",
      description: "Creation timestamp",
      example: "2024-12-05T09:29:40.405Z"
    }
  ]}
/>

## Example Success Response

```json
{
    "statusCode": 201,
    "message": "Eform created successfully",
    "data": {
        "_id": "65a4f2c1e12cda1d55555555",
        "eformId": "a1b2c3d4e5f6",
        "title": "Test Ximpli Eform Demo",
        "workflowId": "c0a98df9fa0d",
        "eformType": "PRIVATE",
        "isActive": true,
        "questions": [
            {
                "questionTitle": "What is your name?",
                "questionType": "text",
                "isMandatory": true,
                "isUnique": true,
                "isAttachment": false,
                "suggestionAnswer": "John Doe"
            },
        ],
        "isContinueToWorkflow": true,
        "createdDate": "2024-01-15T08:30:00.000Z"
    }
}
```

## Example Error Response

```json
{
    "message": [
        "questions.0.questionTitle must be a string"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
```

This error occurs when:
- Required fields are missing
- Field validation fails
- Invalid question configuration
- Invalid workflow ID
