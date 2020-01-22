const images = require("../config/images.json");

("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Movies",
      [
        {
          name: "Ant-Man",
          description:
            "Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements.",
          image: images.ant,
          cast: "Paul Rudd, Evangeline Lily",
          director: "Peyton Reed",
          rating: "3.7",
          uid: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Blade Runner 2049",
          description:
            "Rick Deckard, an ex-policeman, becomes a special agent with a mission to exterminate a group of violent androids. As he starts getting deeper into his mission, he questions his own identity.",
          image: images.blade,
          cast: "Harrison Ford, Ryan Gosling",
          director: "Ridley Scott",
          rating: "4.2",
          uid: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "The Shining",
          description:
            "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
          image: images.shine,
          cast: "Jack Nicholson, Shelley Duvall",
          director: "Stanley Kubrick",
          rating: "4.0",
          uid: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No Time To Die",
          description:
            "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
          image: images.james,
          cast: "Daniel Craig, Rami Malek",
          director: "Joji",
          rating: "3.2",
          uid: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Movies", null, {});
  }
};
