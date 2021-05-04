'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CommentLikes', [{
      user_id: 1,
      comment_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 1,
      comment_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 1,
      comment_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 2,
      comment_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 2,
      comment_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 3,
      comment_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CommentLikes', null, {});
  }
};
