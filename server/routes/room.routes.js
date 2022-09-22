const {
  createRoom,
  getAllRooms,
  getOneRoom,
  DestroyRoom,
  editRoom,
} = require('../controllers/room.controller');

module.exports = (app) => {
  app.post('/api/create/rooms', createRoom);
  app.get('/api/rooms', getAllRooms);
  app.get('/api/rooms/:id', getOneRoom);
  app.put('/api/rooms/:id', editRoom);
  app.delete('/api/rooms/:id', DestroyRoom);
};
