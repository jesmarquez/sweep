module.exports = {
  HOST: "localhost",
  USER: "developer",
  PASSWORD: "Jesus@12502219",
  DB: "swept",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}