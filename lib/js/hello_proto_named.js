var HelloNamed = function () {}

HelloNamed.prototype.hello = function () {
  const message = 'Hello from JavaScript! I\'m named prototype.'
  return message
}

exports.HelloProto = HelloNamed
