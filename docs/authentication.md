---
sidebar_position: 3
---

# Authentication

The Ximpli-Me API uses API keys for authentication. You must include your API key in the `Authorization` header of all requests.

## API Keys

API keys are provided when you create an organization. Each organization has its own unique API key.

### Authorization Header

Include your API key in the `Authorization` header using the Bearer token format:

```bash
Authorization: Bearer YOUR_API_KEY
```

### Example Request

```bash
curl -X GET 'https://api.ximpli-me.com/v1/organizations' \
-H 'Authorization: Bearer YOUR_API_KEY'
```

## Security Best Practices

1. **Keep your API key secure**
   - Never share your API key publicly
   - Don't commit API keys to version control
   - Rotate API keys periodically

2. **Use Environment Variables**
   - Store API keys in environment variables
   - Use configuration files for development

3. **Access Control**
   - Each API key has specific permissions
   - Only use keys with the minimum required permissions
   - Monitor API key usage regularly

## Error Responses

If authentication fails, you'll receive one of these responses:

```json
{
    "statusCode": 401,
    "message": "Unauthorized: Invalid API key"
}
```

```json
{
    "statusCode": 403,
    "message": "Forbidden: Insufficient permissions"
}
``` 