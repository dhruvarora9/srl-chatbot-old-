const express = require("express");

const router = express.Router();
const unansweredQueryController = require("../controller/unansweredquery.js");

router.route("/addunansweredquery").post(unansweredQueryController.addUnansweredQuery);
router.route("/deleteunansweredquery/:id").delete(unansweredQueryController.deleteUnansweredQuery);
router.route("/allunansweredquery").post(unansweredQueryController.allUnansweredQuery);

module.exports = router;
