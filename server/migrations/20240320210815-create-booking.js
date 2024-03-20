module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Add your migration logic here
      await queryInterface.createTable('Bookings', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        user: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: "Users",
                key: "id"
            }
        },
        vehicle: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: "Vehicles",
                key: "id"
            }
        },
        from_date: {
            type: Sequelize.DATEONLY
        },
        to_date: {
            type: Sequelize.DATEONLY
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
      await queryInterface.dropTable('Bookings');
    },
  };
  