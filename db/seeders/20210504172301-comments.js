'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
    {
      comment: 'John Doe is da bomb',
      edited: false,
      liked: 3,
      user_id: 2,
      story_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      comment: 'This story is fire',
      edited: false,
      liked: 3,
      user_id: 1,
      story_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      comment: 'Woah give me some more',
      edited: false,
      liked: 2,
      user_id: 3,
      story_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      comment: 'When is the next installment?',
      edited: true,
      liked: 3,
      user_id: 1,
      story_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      comment: 'I wish i was this good in writing',
      edited: false,
      user_id: 3,
      story_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      comment: "This made me giggle",
      edited: false,
      user_id: 2,
      story_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
