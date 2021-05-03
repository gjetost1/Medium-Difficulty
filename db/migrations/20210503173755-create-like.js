"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Likes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      // stories_id: {
      //   type: Sequelize.INTEGER,
      //   references: { model: "Stories" },
      // },
      // comment_id: {
      //   type: Sequelize.INTEGER,
      //   references: { model: "Comments" },
      // },
      commentable_id: {
        allowNull: false,
        type: sequelize.Integer
      },
      commentable_type: {
        allowNull: false,
        type: sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Likes");
  },
};
