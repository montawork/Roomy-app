const isAuth = require('../middelwares/isAuth');

const {
  register,
  login,
  getAllUsers,
  getOneUser,
  DestroyUser,
  getConnected
} = require('../controllers/user.controller');

module.exports = (app) => {
  app.post('/api/register', register);
  app.post('/api/login', login);
  app.get('/api/users', isAuth, getAllUsers);
  app.get('/api/users/:id', getOneUser);
  app.get('/api/user/', getConnected);
  app.delete('/api/users/:id', DestroyUser);
};
