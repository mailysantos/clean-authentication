module.exports = class ServerError extends Error {
  constructor () {
    super('Internal Eerror')
    this.name = 'ServerError'
  }
}
