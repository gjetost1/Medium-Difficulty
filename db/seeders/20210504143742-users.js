'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'demo',
        hashedPassword: '$2a$10$/9GweWHFU0mNkAVJucaOYOAJjWPU3jVB2zuxtd6QCmvrbQfX5.O4K', //demopassword
        email: 'demo@demo.com',
        profileImage: '/exampleImgs/user1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      username: 'John Doe',
      hashedPassword: 'fals$2a$10$d9P/lkmIQ2o7tAIb43jcHOCsWoBABaiEligM2oDRNcbEbFn.bt4.qe',
      email: 'jd@email.com',
      profileImage: '/exampleImgs/user2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Baby Leaf',
      hashedPassword: '$2a$10$I5pGabgHpVWaYZphT.Jp0eB0gMPTtx4B9Xb329QuvzkaxM7IwIvW2',
      email: 'baby@gmail.com',
      profileImage: '/exampleImgs/user3.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Mozzarella',
      hashedPassword: '$2a$10$8OyFpRJym3TU6WRp2FKSLOmZrq0oPGE/s7agR.OzC/L1fzkfm7q2K',
      email: 'cheesy@yahoo.com',
      profileImage: '/exampleImgs/user4.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Dr. Mundo',
      hashedPassword: '$2a$10$/9GweWHFU0mNkAVJucaOYOAJjWPU3jVB2zuxtd6QCmvrbQfX5.O4K', //demopassword
      email: 'mundo@demo.com',
      profileImage: '/exampleImgs/user5.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
  },{
    username: 'Arthur Wise',
    hashedPassword: '$2a$10$/9GweWHFU0mNkAVJucaOYOAJjWPU3jVB2zuxtd6QCmvrbQfX5.O4K', //demopassword
    email: 'mundo@demo.com',
    profileImage: '/exampleImgs/user6.jpg',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    username: 'James May',
    hashedPassword: '$2a$10$/9GweWHFU0mNkAVJucaOYOAJjWPU3jVB2zuxtd6QCmvrbQfX5.O4K', //demopassword
    email: 'may@demo.com',
    profileImage: '/exampleImgs/user7.jpg',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    username: 'Charlie K.',
    hashedPassword: '$2a$10$/9GweWHFU0mNkAVJucaOYOAJjWPU3jVB2zuxtd6QCmvrbQfX5.O4K', //demopassword
    email: 'charlie@demo.com',
    profileImage: '/exampleImgs/user8.jpg',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
