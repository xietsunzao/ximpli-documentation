---
sidebar_position: 5
---

import HttpMethod from '@site/src/components/HttpMethod';
import CodeTabs from '@site/src/components/CodeTabs';
import RequestTable from '@site/src/components/RequestTable';

# Get Document File

<HttpMethod method="GET" /> `/document/eform/:eformId/template/:fileName`

Download a specific document file by eform ID and filename.

## Request Parameters

<RequestTable
  parameters={[
    {
      name: "eformId",
      type: "String",
      required: true,
      location: "path",
      description: "ID of the eform"
    },
    {
      name: "fileName",
      type: "String",
      required: true,
      location: "path",
      description: "Name of the file to download"
    }
  ]}
/>

## Example Request

<CodeTabs examples={{
  "curl": `curl -X GET 'https://api.ximpli-me.com/document/eform/1733112572541c45073c79976/template/70fc0d7e6465.docx' \\
-H 'Authorization: Bearer YOUR_API_KEY' \\
--output downloaded_file.docx`,

  "go": `package main

import (
    "fmt"
    "io"
    "net/http"
    "os"
)

func main() {
    client := &http.Client{}
    req, err := http.NewRequest("GET", "https://api.ximpli-me.com/document/eform/1733112572541c45073c79976/template/70fc0d7e6465.docx", nil)
    if err != nil {
        panic(err)
    }

    req.Header.Add("Authorization", "Bearer YOUR_API_KEY")

    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    // Create output file
    out, err := os.Create("downloaded_file.docx")
    if err != nil {
        panic(err)
    }
    defer out.Close()

    // Copy response body to file
    _, err = io.Copy(out, resp.Body)
    if err != nil {
        panic(err)
    }
}`,

  "python": `import requests

url = "https://api.ximpli-me.com/document/eform/1733112572541c45073c79976/template/70fc0d7e6465.docx"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, headers=headers, stream=True)
if response.status_code == 200:
    with open("downloaded_file.docx", "wb") as f:
        for chunk in response.iter_content(chunk_size=8192):
            f.write(chunk)`,

  "nodejs": `const axios = require('axios');
const fs = require('fs');

const config = {
    headers: { 'Authorization': 'Bearer YOUR_API_KEY' },
    responseType: 'stream'
};

axios.get('https://api.ximpli-me.com/document/eform/1733112572541c45073c79976/template/70fc0d7e6465.docx', config)
    .then(response => {
        response.data.pipe(fs.createWriteStream('downloaded_file.docx'))
    })
    .catch(error => console.error(error));`,

  "php": `<?php

$client = new GuzzleHttp\\Client();

$response = $client->get('https://api.ximpli-me.com/document/eform/1733112572541c45073c79976/template/70fc0d7e6465.docx', [
    'headers' => [
        'Authorization' => 'Bearer YOUR_API_KEY'
    ],
    'sink' => 'downloaded_file.docx'
]);`
}} />

## Response

On success, the file will be downloaded automatically.

## Error Response

```json
{
    "statusCode": 404,
    "message": "File not found: eform/1733112572541c45073c79976/template/70fc0d7e6465.docx"
}
``` 