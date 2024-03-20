module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Add your migration logic here
      await queryInterface.createTable('Users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        deleted_at: {
            type: Sequelize.DATE,
            allowNull: true,
          },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      // Add reverting logic here
      await queryInterface.dropTable('Users');
    },
  };
  