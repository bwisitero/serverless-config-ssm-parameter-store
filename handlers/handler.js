'use strict';
const co           = require('co');
const configClient = require('../lib/configClient');

const config1 = configClient.loadConfigs(
  [ "testparameter", "/dev/database/mssql/connectionstring/json" ], 
  30000); // cache config values for 30s

module.exports.hello = co.wrap(function* (event, context, callback) {

  let params = [
    yield config1.testparameter,
    yield config1["/dev/database/mssql/connectionstring/json"]
  ]

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      params: [ params ],
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
});
