
exports.validateBody = (schema) => {
    return (req, res, next) => {
        try {
            const validation = schema.validate(req.body, { abortEarly: false }); //to get all validation error of the schema
            if (validation.error) {
                let err = {};
                for (let i in validation.error.details) {
                    err[validation.error.details[i].context.key] = validation.error.details[i].message;
                }
                return res.status(400).json({
                    error: err,
                    status: 0
                });
            } else {
                if (!req.body) {
                    req.body = {};
                }
                // console.log('hi',req['body'])
                // console.log('hey',validation)
                
                req['body'] = validation.value;
                next();
            }
        } catch (err) {
            const error = new Error('err');
            next(error);
        }
    }
};
