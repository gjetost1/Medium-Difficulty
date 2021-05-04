'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Followers', [{
      follower_user_id: 1,
      following_user_id: 2
    },{
      follower_user_id: 1,
      following_user_id: 3
    },{
      follower_user_id: 2,
      following_user_id: 1
    },{
      follower_user_id: 2,
      following_user_id: 3
    },{
      follower_user_id: 3,
      following_user_id: 1
    },{
      follower_user_id: 3,
      following_user_id: 2
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Followers', null, {});
  }
};
