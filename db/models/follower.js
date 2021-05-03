'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    id: {
      type: DataTypes.INTEGER,
      isNull: false,
    },
    follower_user_id: DataTypes.INTEGER,
    following_user_id: DataTypes.INTEGER
  }, {});
  Follower.associate = function(models) {
    
  };
  return Follower;
};
