"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        isNull: false,
        primaryKey: true
      },
      username: DataTypes.STRING,
      hashedPassword: DataTypes.STRING,
      email: DataTypes.STRING,
      profileImage: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    // User.belongsToMany(models.Follower, {
    //   foreignKey: "following_user_id",
    //   through: "Followers"
    // });
    User.hasMany(models.Follower, {
      foreignKey: "follower_user_id"
    });
    User.hasMany(models.Story,{
      foreignKey: "author_id"
    })
    User.hasMany(models.StoryLike, {
      foreignKey: 'user_id'
    })
    User.hasMany(models.Comment, {
      foreignKey: 'user_id'
    })
  };
  return User;
};
