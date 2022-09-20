const isAuth = require('../middelwares/isAuth');

const {
  register,
  login,
  getAllUsers,
} = require('../controllers/user.controller');

module.exports = (app) => {
  app.post('/api/register', register);
  app.post('/api/login', login);
  app.get('/api/users', isAuth, getAllUsers);
};
