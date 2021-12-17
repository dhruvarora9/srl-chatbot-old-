const unansweredQueryModel = require("../model/unansweredquery");

module.exports = {
  addUnansweredQuery: async (req, res, next) => {
    try {
      const { query, response } = req.body;

      const user = new unansweredQueryModel({
        query: query,
        response: response,
      });
      await user
        .save()
        .then(async () => {
          return res.status(200).json({
            message: " Query added Successfully",
            status: 1,
          });
        })
        .catch((err) => {
          const error = new Error(err);
          next(error);
        });
    } catch (err) {
      const error = new Error(err);
      next(error);
    }
  },
  deleteUnansweredQuery: async (req, res, next) => {
    try {
      const userId = req.params.id;
      await unansweredQueryModel.deleteOne({ _id: userId })
        .then(async () => {
          return res.status(200).json({
            message: "Query is Successfully deleted",
            status: 1,
          });
        })
        .catch((err) => {
          const error = new Error(err);
          next(error);
        });
    } catch (err) {
      const error = new Error(err);
      next(error);
    }
  },
  allUnansweredQuery: async (req, res, next) => {
    try {
      await unansweredQueryModel.find()
        .then(async (data) => {
          return res.status(200).json({
            message: "All unanswered Query is here",
            user: data,
            status: 1,
          });
        })
        .catch((err) => {
          const error = new Error(err);
          next(error);
        });
    } catch (err) {
      const error = new Error(err);
      next(error);
    }
  },
};
