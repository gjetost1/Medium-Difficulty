'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StoryLikes', [{
      user_id: 1,
      story_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 1,
      story_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 2,
      story_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 2,
      story_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 3,
      story_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 3,
      story_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 2,
      story_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 2,
      story_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 6,
      story_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 4,
      story_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 1,
      story_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 2,
      story_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 3,
      story_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 6,
      story_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StoryLikes', null, {});
  }
};
