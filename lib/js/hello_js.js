// Hellos from hello.js

// Pattern 2
var hello_function_anon = require('./hello_function_anon.js')
console.log(hello_function_anon())

// Pattern 3
var hello_function_named = require('./hello_function_named.js')
console.log(hello_function_named.something())

// Pattern 4
var hello_object_anon = require('./hello_object_anon.js')
console.log(hello_object_anon.hello())
