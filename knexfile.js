module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './interactions.sqlite',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  production: {
    client: 'sqlite3',
    connection: {
      filename: './prod.sqlite3',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
}
