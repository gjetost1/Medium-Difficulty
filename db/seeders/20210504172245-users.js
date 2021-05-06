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
        username: 'demo',
        hashedPassword: '$2a$10$/9GweWHFU0mNkAVJucaOYOAJjWPU3jVB2zuxtd6QCmvrbQfX5.O4K', //demopassword
        email: 'demo@demo.com',
        profileImage: '/exampleImgs/user1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      username: 'John Doe',
      hashedPassword: '$2a$10$zmiHvQ75lJfzaVtNXPhhyO9VFEUl6hXCEw5BTUuQ21U7ew5Nj3Sge', //1234
      email: 'jd@email.com',
      profileImage: '/exampleImgs/user2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Baby Leaf',
<<<<<<< HEAD:db/seeders/20210504143742-users.js
      hashedPassword: '$2a$10$I5pGabgHpVWaYZphT.Jp0eB0gMPTtx4B9Xb329QuvzkaxM7IwIvW2',
      email: 'baby@gmail.com',
=======
      hashedPassword: '$2a$10$I5pGabgHpVWaYZphT.Jp0eB0gMPTtx4B9Xb329QuvzkaxM7IwIvW2', //123
      email: 'baby@gmail.co',
>>>>>>> a1d4e1df4f398ec4df3b8959d3eefb3a6c71db1b:db/seeders/20210504172245-users.js
      profileImage: '/exampleImgs/user3.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Mozzarella',
<<<<<<< HEAD
<<<<<<< HEAD:db/seeders/20210504143742-users.js
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
=======
      hashedPassword: '$2a$10$8OyFpRJym3TU6WRp2FKSLOmZrq0oPGE/s7agR.OzC/L1fzkfm7q2K', //cheese
      email: 'cheesy@yahoo.ko',
=======
      hashedPassword: '$2a$10$8OyFpRJym3TU6WRp2FKSLOmZrq0oPGE/s7agR.OzC/L1fzkfm7q2K',
      email: 'cheesy@yahoo.com',
>>>>>>> 1f62b1d8eaedca9590c059841b81b3c5772a4f16
      profileImage: '/exampleImgs/user4.jpg',
>>>>>>> a1d4e1df4f398ec4df3b8959d3eefb3a6c71db1b:db/seeders/20210504172245-users.js
      createdAt: new Date(),
      updatedAt: new Date()
<<<<<<< HEAD
=======
    },
    {
      username: 'Dr. Mundo',
      hashedPassword: '$2a$10$/9GweWHFU0mNkAVJucaOYOAJjWPU3jVB2zuxtd6QCmvrbQfX5.O4K', //demopassword
      email: 'mundo@demo.com',
      profileImage: '/exampleImgs/user5.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
>>>>>>> 1f62b1d8eaedca9590c059841b81b3c5772a4f16
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
