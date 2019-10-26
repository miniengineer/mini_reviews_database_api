module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/hpfanfiction',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
}
