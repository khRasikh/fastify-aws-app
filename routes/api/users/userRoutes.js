const {
  postUsersController,
  getUsersController,
} = require("../../../controllers/User/userController");

async function routes(server, options, done) {
  /**GET Route */
  server.get("/users", getUsersController);

  server.post("/users", postUsersController);
  done();
}

module.exports = routes;
