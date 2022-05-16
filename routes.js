const getTestController = (request, reply) => {
  reply.send({ name: "Hey Rasikh, welcome to users route" });
};

function routes(server, options, done) {
  //home page
  server.get("/testusers", getTestController);

  //done
  done();
}

module.exports = routes;
