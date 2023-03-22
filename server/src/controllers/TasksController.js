const TasksModel = require('../models/TasksModel');

exports.CreateTask = (req, res) => {
  const email = req.headers['email'];
  const reqBody = req.body;
  req.body.email = email

  TasksModel.create(reqBody)
    .then((data) => {
      res.status(200).json({ status: 'Ok', data: data });
    })
    .catch((err) => {
      res.status(400).json({ status: 'Fail', data: err });
    });
};
exports.DeleteTask = (req, res) => {
  const id = req.params.id;

  TasksModel.deleteOne({ _id: id })
    .then((data) => {
      res.status(200).json({ status: 'Ok', data: data });
    })
    .catch((err) => {
      res.status(400).json({ status: 'Fail', data: err });
    });
};

exports.UpdateTaskStatus = (req, res) => {
  const id = req.params.id;
  const status = req.params.status;

  TasksModel.updateOne({ _id: id }, { status: status })
    .then((data) => {
      res.status(200).json({ status: 'Ok', data: data });
    })
    .catch((err) => {
      res.status(400).json({ status: 'Fail', data: err });
    });
};


// list task by status
exports.ListTaskByStatus = (req, res) => {
  const email = req.headers['email'];
  const status = req.params.status;

  const pipeline = [
    { $match: { status: status, email: email } },
    {
      "$addFields": {
        createdDate: {
          $dateToString: {
            date: '$createdDate',
            format: '%d-%m-%Y'
          }
        }
      }
    },
    {
      $project: {
        _id: 0
      }
    }
  ]
  TasksModel.aggregate(pipeline)
    .then((data) => {
      res.status(200).json({ status: 'Ok', data: data });
    }).catch((err) => {
      res.status(400).json({ status: 'Fail', data: err });
    });
}

// task status count
exports.TaskStatusCount = (req, res) => {
  const email = req.headers['email'];

  const pipeline = [
    { $match: { email } },
    {
      $group: {
        _id: "$status",
        Total: { $count: {} }
      }
    }
  ]

  TasksModel.aggregate(pipeline)
    .then((data) => {
      res.status(200).json({ status: 'Ok', data: data });
    }).catch((err) => {
      res.status(400).json({ status: 'Fail', data: err });
    });
}