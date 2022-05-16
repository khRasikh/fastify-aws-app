const awsLambdaFastify = require("aws-lambda-fastify");
const runServer = require("./index");

// const proxy = awsLambdaFastify(runServer());
const proxy = awsLambdaFastify(runServer(), {
  binaryMimeTypes: ["application/octet-stream"],
});

exports.handler = proxy;
// or
// exports.handler = (event, context, callback) => proxy(event, context, callback);
// or
// exports.handler = (event, context) => proxy(event, context);
// or
// exports.handler = async (event, context) => proxy(event, context);
