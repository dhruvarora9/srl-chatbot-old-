const joi = require("joi");

module.exports = {
    add_admin_schema: joi.object({
        username: joi.string().trim().required(),
        email: joi.string().trim().email().lowercase().required(),
        password: joi.string().trim().max(8).min(4).required(),
    }),
    
    admin_login_schema: joi.object({
        email: joi.string().trim().email().lowercase().required(),
        password: joi.string().trim().max(8).min(4).required()
    })
};
