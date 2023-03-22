const express = require('express');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');
const {
  Registration,
  Login,
  UserProfile,
  UserProfileUpdate,
} = require('../controllers/UsersController');
const {
  CreateTask,
  UpdateTaskStatus,
  DeleteTask,
  ListTaskByStatus,
  TaskStatusCount,
} = require('../controllers/TasksController');
const router = express.Router();

// user routes
router.post('/registration', Registration);
router.post('/login', Login);
router.get('/user-profile', AuthVerifyMiddleware, UserProfile);
router.post('/user-profile-update', AuthVerifyMiddleware, UserProfileUpdate);

// tasks routes
router.post('/create-task', AuthVerifyMiddleware, CreateTask);
router.post('/delete-task/:id', AuthVerifyMiddleware, DeleteTask);
router.get('/update-task-status/:id/:status', AuthVerifyMiddleware, UpdateTaskStatus);
router.get('/list-task-by-status/:status', AuthVerifyMiddleware, ListTaskByStatus);
router.get('/task-status-count', AuthVerifyMiddleware, TaskStatusCount);

// module export
module.exports = router;
