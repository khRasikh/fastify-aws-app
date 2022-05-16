const app = require("fastify")({
  // logger: { level: "info", prettyPrint: true, file: "./logs.txt" },
  logger: { level: "info", prettyPrint: true },
});
// const app = fastify();
//import controllers
const {
  addRecordController,
  indexController,
  homeController,
  editRecordsController,
  editRecordController,
} = require("./controllers/testControllers");

/**options */
const addOpts = {
  schema: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
      required: ["name"],
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

/**Lmabda all Routes */
function routes(server, options, done) {
  /**Index route */
  app.get("/", indexController);
  /**lambda GET route */
  app.get("/home", homeController);
  /**lambda POST route */
  app.post("/add", addOpts, addRecordController);
  /**lambda PUT route */
  app.put("/edit", addOpts, editRecordsController);
  app.put("/edit/:id", addOpts, editRecordController);
  //return route
  return app;
}

if (require.main === module) {
  // called directly i.e. "node app"
  routes().listen(3000, (err) => {
    if (err) console.error(err);
    console.log("server listening on 3000");
  });
} else {
  // required as a module => executed on aws lambda
  module.exports = routes;
}
