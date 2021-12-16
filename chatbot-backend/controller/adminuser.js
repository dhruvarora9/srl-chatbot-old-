const AdminModel = require("../model/adminuser");

module.exports = {
  addAdmin: async (req, res, next) => {
    try {
      const { username, email, password } = req.body;

      const admin = new AdminModel({
        username: username,
        email : email,
        password: password
      });
      await admin
        .save()
        .then(async () => {
          return res.status(200).json({
            message: "Admin added Successfully",
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
  adminLogin: async (req, res, next) => {
    try {
      const adminEmail = req.body.email; //userqueyr in body of the req
      const adminPassword = req.body.password;

    await AdminModel.findOne({ email: adminEmail, password: adminPassword })
      .then(async (data) => {
        if (data) {
          return res.status(200).json({
            message: "Login Successful",
            admin: data,
            // token: 'user logedin',
            status: 1,
          });
        } else {
          return res.status(200).json({
            message: "Invalid Email and Password ",
            status: 1,
          });
        }
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

// exports.adminLogin = async (req, res, next) => {
//     try {
//         if (Object.keys(req.admin).length > 0) {
//             const payload = {
//                 email: req.admin.email,
//                 password: req.admin.password
//             }
//             return res.status(200).json({
//                 message: "Login Successful",
//                 // token: generate_user_jwt(payload),
//                 // tokenType: 'Bearer',
//                 status: 1
//             });
//         } else {
//             return res.status(400).json({
//                 message: "Invalid Email and Password",
//                 status: 0
//             });
//         }
//     } catch (err) {
//         const error = new Error(err);
//         next(error);
//     }
// };


