'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Vehicles', [{
        number_plate: "UP-AQ-20",
        name: "civic",
        company: "honda",
        type: "hatchback",
        wheels : 4
      }, 
      {
        number_plate: "UP-KN-25",
        name: "jetta",
        company: "volkswagen",
        type: "sedan",
        wheels : 4
      },
      {
        number_plate: "UP-RT-60",
        name: "nexon",
        company: "tata",
        type: "suv",
        wheels : 4
      },
      {
        number_plate: "UP-TN-60",
        name: "hunter",
        company: "royal enfield",
        type: "cruiser",
        wheels : 2
      },
      {
        number_plate: "UP-KP-90",
        name: "ninja",
        company: "kawasaki",
        type: "sports",
        wheels : 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Vehicles', null, {});
  }
};
