//import controllers
const {
  addRecordController,
  indexController,
  homeController,
  editRecordsController,
  editRecordController,
} = require("../../controllers/testControllers");

const getTestController = (request, reply) => {
  reply.send({ name: "Hey Rasikh, welcome to users route" });
};
/**options */
const addOpts = {
  schema: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
      // required: ["name"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
};

async function routes(server, options, done) {
  //home page
  server.get("/testusers", getTestController);
  server.get("/", indexController);
  /**lambda GET route */
  server.get("/home", homeController);

  /**lambda POST route */
  server.post("/add", addOpts, addRecordController);
  /**lambda PUT route */
  server.put("/edit", addOpts, editRecordsController);
  server.put("/edit/:id", addOpts, editRecordController);

  //done
  done();
}

module.exports = routes;
