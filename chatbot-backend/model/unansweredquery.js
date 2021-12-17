const mongoose = require("mongoose");

const unansweredQuery = new mongoose.Schema({
  query: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required : false,
  },
});


module.exports = mongoose.model("unansweredquery", unansweredQuery);
