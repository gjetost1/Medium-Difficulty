"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        isNull: false,
      },
      username: DataTypes.STRING,
      hashedPassword: DataTypes.STRING,
      email: DataTypes.STRING,
      profileImage: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    User.belongsToMany(models.Followers, {
      foreignKey: "following_user_id",
    });
    User.hasMany(models.Followers, {
      foreignKey: "follower_user_id",
    });
  };
  return User;
};
