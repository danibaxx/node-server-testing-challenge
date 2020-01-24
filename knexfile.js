const sqlite = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
  pool : {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },
};

module.exports = {
  dev: {
    ...sqlite,
    connection: {
      filename: "./data/zoosDev.db3",
    },
  },
  test: {
    ...sqlite,
    connection: {
      filename: "./data/zoosTest.db3",
    },
  },
};

