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


module.exports = mongoose.model("unansweredquery", unansweredQuery);
