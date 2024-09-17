// Update with your config settings.


module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/car-dealer.db3"
    },

    useNullAsDefault: true,

    migrations: {
      directory: "./data/migrations"
    },

    seeds: {
      directory: "./data/seeds"
    }
  }
};

const server = require("./api/server");

server.listen(4000, () => {
  console.log("Server listening on port 4000!");
});

