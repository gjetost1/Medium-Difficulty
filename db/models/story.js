'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    id: {
      type: DataTypes.INTEGER,
      isNull: false,
    },
    title: DataTypes.STRING,
    story: DataTypes.TEXT,
    liked: DataTypes.INTEGER,
    storyImage: DataTypes.TEXT,
    views: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  }, {});
  Story.associate = function(models) {
    Story.hasMany(models.User, {
      foreignKey: 'author_id'
    })
    Story.hasMany(models.Like, {
      foreignKey: 'stories_id',
      constraints: false,
      scope: {
        commentableType: 'story'
      }
    })
  };
  return Story;
};
