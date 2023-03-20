require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['token'];

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(400).json({ status: 'unauthorized', data: err });
    } else {
      req.headers.email = decoded.data;
      next();
    }
  });
};
