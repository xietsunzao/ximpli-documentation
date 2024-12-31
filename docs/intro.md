---
sidebar_position: 1
---

import FeaturedAPI from '@site/src/components/FeaturedAPI';

# Introduction

The Ximpli Me API is based on HTTP protocol and uses standard HTTP methods. The API is designed to be stateless and secure, with all communication over HTTPS.

## Featured API

<FeaturedAPI />


## Host

:::info
Always use the HTTPS protocol to access the API.
:::

The API version is specified in the URL. The current version is `v1`.


| Environment | URL | Description |
|-|-|-|
| Production | `https://api.ximpli-me.com/v1/{resource}` | For production use |
| Staging | `https://staging-api.ximpli-me.com/v1/{resource}` | For development and testing |





## HTTP Methods

The API supports the following HTTP methods:

- `GET` - Retrieve resources
  _example:_ `/organizations` - Retrieves a list of organizations.
- `POST` - Create new resources
  _example:_ `/eform/submit` - Submits a new eform.
- `PUT` - Update existing resources
  _example:_ `/eform/submit/{eformId}` - Updates an existing eform.
- `DELETE` - Delete resources
  _example:_ `/eform/answer/delete/{eformId}/{answerId}` - Deletes an answer to an eform.

## HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid request |
| 401 | Unauthorized - Authentication required |
| 404 | Not Found - Resource not found |
| 413 | Payload Too Large |
| 503 | Service Unavailable |
