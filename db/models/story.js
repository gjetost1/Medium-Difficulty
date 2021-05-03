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
    Story.belongsTo(models.User, {
      foreignKey: 'author_id'
    })
    Story.hasMany(models.Like, {
      foreignKey: 'commentable_id',
      constraints: false,
      scope: {
        commentable_type: 'story'
      }
    })
    Story.hasMany(models.Comment,{
      foreignKey: 'story_id'
    })
  };
  return Story;
};
