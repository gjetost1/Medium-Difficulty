'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    id: {
      type: DataTypes.INTEGER,
      isNull: false,
    },
    user_id: DataTypes.INTEGER,
    // stories_id: DataTypes.INTEGER,
    // comment_id: DataTypes.INTEGER
    commentable_id: DataTypes.INTEGER,
    commentable_type: DataTypes.STRING

  }, {});
  Like.associate = function(models) {
    Like.belongsTo(models.User,{
      foreignKey: 'user_id'
    })
    Like.belongsTo(models.Comment,{
      foreignKey: 'commentable_id', constraints: false
    })
  };
  return Like;
};
