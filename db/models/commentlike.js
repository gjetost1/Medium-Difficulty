'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommentLike = sequelize.define('CommentLike', {
    id: {
      type: DataTypes.INTEGER,
      isNull: false,
    },
    user_id: DataTypes.INTEGER,
    comment_id: DataTypes.INTEGER
  }, {});
  CommentLike.associate = function(models) {
    CommentLike.belongsTo(models.Comment, {
      foreignKey: 'comment_id'
    })
    CommentLike.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  };
  return CommentLike;
};
