'use strict';
const co           = require('co');
const configClient = require('../lib/configClient');

const config1 = configClient.loadConfigs(
  [ process.env.TEST_PARAMETER, process.env.CONNECTION_STRING ], 
  30000); // cache config values for 30s

module.exports.hello = co.wrap(function* (event, context, callback) {

  console.log('stage ', process.env.STAGE)
  console.log('testparameter ', process.env.TEST_PARAMETER)
  console.log('connectionstring ', process.env.CONNECTION_STRING)
  
  let params = [
    yield config1.testparameter,
    yield config1[process.env.CONNECTION_STRING]
  ]

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      params: [ params ]
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
});
