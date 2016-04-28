// Hellos from hello.js

// Pattern 2
var helloFunctionAnon = require('./hello_function_anon.js')
console.log(helloFunctionAnon())

// Pattern 3
var helloFunctionNamed = require('./hello_function_named.js')
console.log(helloFunctionNamed.something())

// Pattern 4
var helloObjectAnon = require('./hello_object_anon.js')
console.log(helloObjectAnon.hello())

// Pattern 5
var helloObjectNamed = require('./hello_object_named.js')
console.log(helloObjectNamed.helloObject.hello())

// Pattern 6
var HelloProtoAnon = require('./hello_proto_anon.js')
console.log(
  (new HelloProtoAnon()).hello()
)

// Pattern 7
var HelloProtoNamed = require('./hello_proto_named.js')
console.log(
  (new HelloProtoNamed.HelloProto()).hello()
)
