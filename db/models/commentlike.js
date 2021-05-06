'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommentLike = sequelize.define('CommentLike', {
    id: {
      type: DataTypes.INTEGER,
      isNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: DataTypes.INTEGER,
    comment_id: DataTypes.INTEGER
  }, {});
  CommentLike.associate = function(models) {
    CommentLike.belongsTo(models.Comment, {
      foreignKey: 'comment_id',
      onDelete: 'cascade'
    })
    CommentLike.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  };
  return CommentLike;
};
