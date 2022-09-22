const dbConfig = require('../config/db.config');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('DB connected..');
  })
  .catch((err) => {
    console.log('DB Error' + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user.model.js')(sequelize, DataTypes);
db.rooms = require('./room.model.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log('yes re-sync done!');
});

// 1 to Many Relation

db.users.hasMany(db.rooms, {
  foreignKey: 'user_id',
});

db.rooms.belongsTo(db.users, {
  foreignKey: 'user_id',
});

// db.users.hasMany(db.rooms);
// db.rooms.belongsTo(db.users);

module.exports = db;
