module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Add your migration logic here
      await queryInterface.createTable('Vehicles', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        number_plate: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        company: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        wheels: {
          type: Sequelize.TINYINT,
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
  