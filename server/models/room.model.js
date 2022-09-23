module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    'room',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          roomValidation() {
            if (this.title.length < 2) {
              throw new Error('Title length must be 2 or greater!');
            }
          },
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          roomValidation() {
            if (this.location.length < 2) {
              throw new Error('Location length must be 2 or greater!');
            }
          },
        },
      },
      surface: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          roomValidation() {
            if (this.title.length < 2) {
              throw new Error("Surface can't be empty");
            }
          },
        },
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          roomValidation() {
            if (this.region.length < 2) {
              throw new Error('Region length must be 2 or greater!');
            }
          },
        },
      },
      nbrBeds: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          roomValidation() {
            if (this.nbrBeds.length < 1) {
              throw new Error("Numbre of beds can't be empty");
            }
          },
        },
      },
      nbrRoommates: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          roomValidation() {
            if (this.nbrRoommates.length < 1) {
              throw new Error("Numbre of roommates can't be empty");
            }
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          roomValidation() {
            if (this.image.length < 1) {
              throw new Error("image can't be empty");
            }
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          roomValidation() {
            if (this.description.length < 10) {
              throw new Error('Description length must be 2 or greater!');
            }
          },
        },
      },
      isAccepted: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {}
  );

  return Room;
};
