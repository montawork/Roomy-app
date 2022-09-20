const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          userValidation() {
            if (this.firstName.length < 2) {
              throw new Error('firstName length must be 2 or greater!');
            }
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          userValidation() {
            if (this.lastName.length < 2) {
              throw new Error('lastName length must be 2 or greater!');
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
        validate: {
          isEmail: {
            msg: 'Invalid email',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          set(value) {
            if (value.length >= 8) {
              const hash = bcrypt.hashSync(value, 10);
              this.setDataValue('password', hash);
            } else {
              throw new Error('Password length must be 8 or greater!');
            }
          },
        },
      },
    },
    {}
  );

  return User;
};
