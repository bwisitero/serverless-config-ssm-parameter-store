# serverless-config-ssm-parameter-store

Demo of how to use AWS SSM Parameter Store for config management in AWS Lambda.

Source Origin :
Please read the accompanying [blog post](https://hackernoon.com/you-should-use-ssm-parameter-store-over-lambda-env-variables-5197fc6ea45b) on why you should use SSM parameter store over Lambda environment variables.

### Getting Started

Use the AWS cli to add two parameters to SSM parameter store:

`aws ssm put-parameter --name foo --value foo --type SecureString --key-id <KMS key id> --region us-west-1`

`aws ssm put-parameter --name bar --value bar --type SecureString --key-id <KMS key id> --region us-west-1`

Update the `iamRoleStatements` section of the  `serverless.yml` file with the 
KMS key id you used above.

Deploy with serverless framework and curl the deployed endpoints.

**You need Serverless framework version 1.22.0 or above.**