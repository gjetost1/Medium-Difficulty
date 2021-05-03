'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER,
      isNull: false,
      primaryKey: true
    },
    comment: DataTypes.TEXT,
    edited: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    story_id: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
    Comment.belongsTo(models.Story, {
      foreignKey: 'story_id'
    })
    Comment.hasMany(models.CommentLike, {
      foreignKey: 'comment_id'
    })
  };
  return Comment;
};