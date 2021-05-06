'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    id: {
      type: DataTypes.INTEGER,
      isNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    follower_user_id: DataTypes.INTEGER,
    following_user_id: DataTypes.INTEGER
  }, {});
  Follower.associate = function(models) {
    Follower.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'follower_user_id'
    });
    Follower.belongsTo(models.User, {
      as: 'Followers',
      foreignKey: 'following_user_id'
    })
  };
  return Follower;
};
