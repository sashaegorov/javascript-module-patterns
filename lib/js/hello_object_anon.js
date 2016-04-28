var Hello = function () {}

Hello.prototype.hello = function () {
  const message = 'Hello from JavaScript! I\'m anonymous object.'
  return message
}

module.exports = new Hello()
