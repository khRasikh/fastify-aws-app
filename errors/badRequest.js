const badRequestError = (req, resp) => {
  resp.send("ERORR!!!");
};
module.exports = badRequestError;
