'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false
    })
  }
};
