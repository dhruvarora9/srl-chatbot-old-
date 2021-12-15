const answeredquery = require("../model/answeredquery");
const answeredQueryModel = require("../model/answeredquery");
const unansweredQueryModel = require("../model/unansweredquery");

module.exports = {
  // Finding response for a query searched by user
  getQueryResult: async (req, res, next) => {
    try {
      const { query } = req.body;
      const answeredQueryResponse = await answeredQueryModel
        .findOne({ query: query })
        .exec();
      if (!answeredQueryResponse) {
        const unansweredQueryResponse = await unansweredQueryModel
          .findOne({ query: query })
          .exec();
        if (!unansweredQueryResponse) {
          const ques = new unansweredQueryModel({
            query: query,
            response: "",
          });
          await ques.save();
        }
        return res.status(500).json({
          status: 0,
          message:
            "Sorry Unable to Process your request.Please try with another keyword",
        });
      }
      res.json({
        status: 1,
        responseData: answeredQueryResponse.response,
      });
    } catch (error) {
      res.status(500).json({
        status: 0,
        message: "Could not fetch any response from server. Please try again!",
        error,
      });
    }
  },
};
