//impport database and mongoose
// const myDB = require("../../mongodb");
// const getUserType = require("../../models/user/userModel");

//GET USER
// const getUsers = myDB.model("users", getUserType, "users");
// const getUsersController = (req, resp) => {
//   result = getUsers
//     .find()
//     .lean()
//     .select("name")
//     .exec(function (err, result) {
//       resp.send(result);
//     });
// };
async function getUsersController(request, response) {
  response.send({ users: ["Marko", "Rasikh", "Katja", "Omar"] });
}

//POST USER
async function postUsersController(request, response) {
  const { name, email } = request.body;
  response.send({
    name: name,
    email: email,
    users: ["Marko", "Rasikh", "Katja", "Omar"],
  });
}

//UPDATE USER

//DELETE USER

//EXPORT MODULE
module.exports = { postUsersController, getUsersController };
