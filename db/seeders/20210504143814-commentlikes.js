'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CommentLikes', [{
      user_id: 1,
      comment_id: 2
    },{
      user_id: 1,
      comment_id: 3
    },{
      user_id: 1,
      comment_id: 1
    },{
      user_id: 2,
      comment_id: 3
    },{
      user_id: 2,
      comment_id: 1
    },{
      user_id: 3,
      comment_id: 6
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CommentLikes', null, {});
  }
};
