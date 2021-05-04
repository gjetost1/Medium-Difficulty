'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Followers', [{
      follower_user_id: 1,
      following_user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      follower_user_id: 1,
      following_user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      follower_user_id: 2,
      following_user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      follower_user_id: 2,
      following_user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      follower_user_id: 3,
      following_user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      follower_user_id: 3,
      following_user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Followers', null, {});
  }
};
