const { default: mongoose } = require('mongoose');

// data schema
const DataSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    phone: { type: String },
    userName: { type: String, unique: true },
    password: { type: String },
    photo: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

// data model
const UsersModel = mongoose.model('users', DataSchema);

// module exports
module.exports = UsersModel;
