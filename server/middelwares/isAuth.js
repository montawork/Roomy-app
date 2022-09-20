const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    res.status(401).send({ errors: [{ msg: 'you are not authorized' }] });
  }
  try {
    const decoded = jwt.verify(token, 'roomy');
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ errors: [{ msg: 'you are not authorized' }] });
  }
};
module.exports = isAuth;
