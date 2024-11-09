# Node Express S3 Boilerplate

This repository is a boilerplate/template for integrating Amazon S3 with a Node.js and Express server. It provides a clean, organized structure for managing file uploads and downloads, including S3 setup, configuration, and basic routes for handling common operations with AWS S3.

## Features

- **File Uploads to S3**: Easily upload files directly to S3 with secure configurations.
- **File Retrieval**: Retrieve and download files stored on S3.
- **Environment-Based Configuration**: Keep sensitive data and configurations secure.
- **Error Handling**: Graceful handling of errors in API requests.

## Prerequisites

Before using this project, ensure you have:

- **Node.js** (v14 or later)
- **AWS Account**: with S3 bucket set up
- **AWS SDK**: credentials (Access Key and Secret Key) for S3

## Setup Instructions

```bash
git clone https://github.com/faisalamin001/node-s3-template.git
cd node-s3-template

Create config/environments/development.json (I already created for you!)

{
  "port": 4000,
  "endpoint": "http://localhost:4000/api",
  "db": {
    "uri": "mongodb://localhost:27017/",
    "name": "your_cool_db_name"
  },
  "signIn": {
    "jwtSecret": "your_jwt_secret",
    "jwtExpiresIn": "30d"
  }
  .
  .
  .
}

npm install

```
