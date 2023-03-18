const UsersModel = require('../models/UsersModel');

exports.Registration = (req, res) => {
  const reqBody = req.body;

  UsersModel.create(reqBody)
    .then((data) => {
      res.status(201).json({ status: 'Success', data: data });
    })
    .catch((err) => {
      res.status(401).json({ status: 'Fail', data: err });
    });
};
