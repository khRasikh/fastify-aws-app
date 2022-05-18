const app = require("fastify")({
  // logger: { level: "info", prettyPrint: true, file: "./logs.txt" },
  logger: { level: "info", prettyPrint: true },
});
// const app = fastify();
/**Lmabda all Routes */
function routes(server, options, done) {
  /**register routes */
  app.register(require("./routes/api/routes"));
  app.register(require("./routes/api/users/userRoutes"));
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
