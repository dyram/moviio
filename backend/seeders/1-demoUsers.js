"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "aaa",
          pass: "sha1$e57aafd7$1$39b297a30d687d197764f95af92bbb84f36334a7",
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "vedh",
          pass: "sha1$0edc8d09$1$8136329c7723435fffe3692be0ca1a93a6eae9e2",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "john",
          pass: "sha1$4690cd4b$1$d05379589f2109a978324ef92add78ed12c03f1a",
          role: "sadmin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "siva",
          pass: "sha1$d1c0700c$1$bbe8c5ea2bc8fa4c3979e37b993724b65bed4c98",
          role: "sadmin",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
