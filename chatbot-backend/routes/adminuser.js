const express = require("express");
const { add_admin_schema } = require("../schema/adminuser");
const { admin_login_schema } = require("../schema/adminuser");


const router = express.Router();
const adminController = require("../controller/adminuser");
const adminDbValidate = require("../helper/adminDbValidate");
const { validateBody } = require("../helper/ValidateSchema")

router.route("/addadmin" ).post( validateBody(add_admin_schema), adminDbValidate.checkAdmin , adminController.addAdmin);
router.route("/login").post(validateBody(admin_login_schema), adminController.adminLogin);

module.exports = router;
