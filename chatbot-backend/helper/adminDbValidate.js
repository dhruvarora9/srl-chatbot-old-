const AdminModel = require("../model/adminuser");

exports.checkAdmin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let err = {};
        const emailExist = await AdminModel.find({email: email});
        const passwordExist = await AdminModel.find({password: password});
        if (emailExist && emailExist.length > 0) {
            console.log(' email is exist ');
            err.email = "Email address already exist";
            console.log(err);
            return res.status(400).json({
                error: err,
                status: 0,
            });
        }

        if (passwordExist && passwordExist.length > 0) {
            console.log(' password  is exist ');
            err.password = "Password  already exist";
            return res.status(400).json({
                error: err,
                status: 0,
            });
        } else {
            next();
        }   

    } catch (err) {
        const error = new Error(err);
        next(error);
    }
}