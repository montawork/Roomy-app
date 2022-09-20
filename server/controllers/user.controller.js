const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// create main Model
const User = db.users;

// main work

// 1. create User

const register = async (req, res) => {
  try {
    // CHECK IF USER EXIST
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
      res.status(400).json({ msg: 'Email already exist' });
    } else {
      const user = await User.create(req.body);
      res.status(200).json(user);
      console.log(user);
    }
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(400).json({ msg: 'Email not found' });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Wrong password' });
    }

    // TOKEN
    const payload = {
      id: user.id,
    };

    const token = jwt.sign(payload, 'roomy', {
      expiresIn: '30d',
    });

    return res.json({ user, token });
  } catch (error) {
    console.log(error);
  }
};

// GET ALL USERS
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    console.log(error);
  }
};

// GET ONE USER BY ID
const getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      res.status(400).json({ msg: 'User not exist' });
    }
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};



//GET COONECTED USER
const getConnected = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      res.status(400).json({ msg: 'User not exist' });
    }
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};



// DELETE USER
const DestroyUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: 'User deleted' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  login,
  getAllUsers,
  getOneUser,
  DestroyUser,
  getConnected

};
