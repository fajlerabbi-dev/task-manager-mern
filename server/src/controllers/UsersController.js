require('dotenv').config();
const jwt = require('jsonwebtoken');
const UsersModel = require('../models/UsersModel');

// user registration
exports.Registration = (req, res) => {
  const reqBody = req.body;

  UsersModel.create(reqBody)
    .then((data) => {
      res.status(200).json({ status: 'Success', data: data });
    })
    .catch((err) => {
      res.status(200).json({ status: 'Fail', data: err });
    });
};

// user login
exports.Login = (req, res) => {
  const reqBody = req.body;

  UsersModel.aggregate([
    // match user email and password
    { $match: reqBody },
    // show these fields after matching email and password
    { $project: { _id: 1, email: 1, firstName: 1, lastName: 1, phone: 1 } },
  ])
    .then((data) => {
      if (data.length > 0) {
        // create user token
        const payload = {
          data: data[0]['email'],
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 60 * 60,
        });
        // token creation completed and pass that token to the response end.
        res.status(200).json({
          status: 'Success',
          data: data,
          token: token,
        });
      } else {
        // if user send wrong email or password then it will throw this response.
        res.status(401).json({ status: 'Unauthorized' });
      }
    })
    .catch((err) => {
      // if the system get's any other technical error like database connections etc then it will throw this error response with the exact error.
      res.status(400).json({ status: 'Fail', data: err });
    });
};

exports.UserProfile = (req, res) => {
  const email = req.headers['email'];
  const pipeline = [
    // match or find via email
    { $match: { email } },
    // hide these fields
    { $project: { _id: 0, photo: 0 } },
  ];
  UsersModel.aggregate(pipeline)
    .then((data) => {
      res.status(200).json({ status: 'Ok', data: data });
    })
    .catch((err) => {
      res.status(400).json({ status: 'Fail', data: err });
    });
};

// Profile update
exports.UserProfileUpdate = (req, res) => {
  const email = req.headers['email'];
  const reqBody = req.body;

  UsersModel.updateOne({ email }, reqBody)
    .then((data) => {
      res.status(200).json({ status: 'Ok', data: data });
    })
    .catch((err) => {
      res.status(400).json({ status: 'Fail', data: err });
    });
};
