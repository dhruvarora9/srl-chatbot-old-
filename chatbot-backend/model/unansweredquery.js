const mongoose = require("mongoose");

const unansweredQuery = new mongoose.Schema({
  query: {
    type: String,
    required: true,
  },
  response: {
    type: String,
  },
});
//id
//list

module.exports = mongoose.model("unansweredquery", unansweredQuery);
