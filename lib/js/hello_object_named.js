var HelloNamed = function () {}

HelloNamed.prototype.hello = function () {
  const message = 'Hello from JavaScript! I\'m named object.'
  return message
}

exports.helloObject = new HelloNamed()
