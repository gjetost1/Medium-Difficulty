'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
    {
      username: 'John Doe',
      hashedPassword: '$2a$10$d9P/lkmIQ2o7tAIb43jcHOCsWoBABaiEligM2oDRNcbEbFn.bt4.qe',
      email: 'jd@email.com',
      profileImage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Baby Leaf',
      hashedPassword: '$2a$10$I5pGabgHpVWaYZphT.Jp0eB0gMPTtx4B9Xb329QuvzkaxM7IwIvW2',
      email: 'baby@gmail.co',
      profileImage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Mozzarella',
      hashedPassword: '$2a$10$8OyFpRJym3TU6WRp2FKSLOmZrq0oPGE/s7agR.OzC/L1fzkfm7q2K',
      email: 'cheesy@yahoo.ko',
      profileImage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
