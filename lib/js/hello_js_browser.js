import helloFunctionAnon from './hello_function_anon.js'
import helloFunctionNamed from './hello_function_named.js'
import helloObjectAnon from './hello_object_anon.js'
import helloObjectNamed from './hello_object_named.js'
import HelloProtoAnon from './hello_proto_anon.js'
import HelloProtoNamed from './hello_proto_named.js'

import $ from 'jquery'

export function hello_js_browser () {
  $(document).ready(function () {
    $('body').addClass('hello')
    // Function
    $('<li>' + helloFunctionAnon() + '</li>').appendTo('#msg')
    $('<li>' + helloFunctionNamed.something() + '</li>').appendTo('#msg')

    // Object
    $('<li>' + helloObjectAnon.hello() + '</li>').appendTo('#msg')
    $('<li>' + helloObjectNamed.helloObject.hello() + '</li>').appendTo('#msg')

    // Prototype
    var fromProtoAnon = new HelloProtoAnon()
    $('<li>' + fromProtoAnon.hello() + '</li>').appendTo('#msg')
    var fromProtoNamed = new HelloProtoNamed.HelloProto()
    $('<li>' + fromProtoNamed.hello() + '</li>').appendTo('#msg')
  })
}
