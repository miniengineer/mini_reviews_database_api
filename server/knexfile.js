module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/reviews',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
}
