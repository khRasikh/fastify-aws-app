const { v4 } = require("uuid");

const addRecordController = async (request, reply) => {
  const { name } = request.body;
  const id = v4();
  reply.code(200).send({
    message: `Hello ${name}! Your id is: ${id}`,
  });
};

const indexController = async (request, reply) =>
  reply.send({
    greeting: "Hi Dear Rasikh, Welcome to Serverless API using Fastify-MongoDB",
    name: "Khudadad Rasikh",
    date: new Date().toISOString(),
  });

const homeController = async (req, res) => {
  /** origin event and context v1*/
  const event = req.awsLambda.event;
  const context = req.awsLambda.context;
  const data = {
    name: "Fastify AWS Application",
    date: new Date(),
    status: "Active",
    event: event,
    context: context,
  };
  res.send({ data });
};
const editRecordsController = async (req, res) => {
  /** origin event and context v1*/
  const event = req.awsLambda.event;
  const context = req.awsLambda.context;
  const data = {
    name: "Fastify AWS Application",
    date: new Date(),
    status: "Active",
    event: event,
    context: context,
  };
  res.send({ data });
};
const editRecordController = async (req, res) => {
  /** origin event and context v1*/
  const event = req.awsLambda.event;
  const context = req.awsLambda.context;
  const data = {
    name: "Fastify AWS Application",
    date: new Date(),
    status: "Active",
    event: event,
    context: context,
  };
  res.send({ data });
};
module.exports = {
  addRecordController,
  indexController,
  homeController,
  editRecordsController,
  editRecordController,
};
