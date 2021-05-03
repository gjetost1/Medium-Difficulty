'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: DataTypes.STRING,
    story: DataTypes.TEXT,
    liked: DataTypes.INTEGER,
    storyImage: DataTypes.TEXT,
    views: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  }, {});
  Story.associate = function(models) {
    // associations can be defined here
  };
  return Story;
};