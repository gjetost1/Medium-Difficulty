'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoryLike = sequelize.define('StoryLike', {
    id: {
      type: DataTypes.INTEGER,
      isNull: false,
    },
    user_id: DataTypes.INTEGER,
    story_id: DataTypes.INTEGER
  }, {});
  StoryLike.associate = function(models) {
    StoryLike.belongsTo(models.Story, {
      foreignKey: 'story_id'
    })
    StoryLike.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  };
  return StoryLike;
};
