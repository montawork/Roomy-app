const db = require('../models');

// create Models
const Room = db.rooms;
const User = db.users;

// 1. create ROOM
const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json(room);
    console.log(room);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

// GET ALL ROOMES
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll({
      include: User,
    });
    return res.json(rooms);
  } catch (error) {
    console.log(error);
  }
};


// GET CURRENT USER ROOMES
// const getRoomsUser = async (req, res) => {
//   try {
//     const rooms = await Room.findAll({
//       where:{
//         id:req.params.id
//       },
//       include: User,
//     });
//     return res.json(rooms);
//   } catch (error) {
//     console.log(error);
//   }
// };

// GET ONE ROOM BY ID
const getOneRoom = async (req, res) => {
  try {
    const room = await Room.findOne({
      where: { id: req.params.id },
      
    });
    if (!room) {
      res.status(400).json({ msg: 'Room not exist' });
    }
    return res.json(room);
  } catch (error) {
    console.log(error);
  }
};

// UPDATE ROOM
const editRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.update(req.body, {
      where: {
        id: req.params.id,
      },
      include: User,
    });
    res.json(updatedRoom);
  } catch (error) {
    console.log(error);
  }
};

// DELETE ROOM
const DestroyRoom = async (req, res) => {
  try {
    await Room.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: 'Room deleted' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createRoom,
  getAllRooms,
  getOneRoom,
  DestroyRoom,
  editRoom,
 
};
