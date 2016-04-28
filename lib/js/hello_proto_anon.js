var Hello = function () {}

Hello.prototype.hello = function () {
  const message = 'Hello from JavaScript! I\'m anonymous prototype.'
  return message
}

module.exports = Hello
