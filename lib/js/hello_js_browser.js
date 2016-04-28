import hello_function_anon from './hello_function_anon.js'
import hello_function_named from './hello_function_named.js'
import hello_object_anon from './hello_object_anon.js'
import $ from 'jquery'

export function hello_js_browser () {
  $(document).ready(function () {
    $('body').addClass('hello')
    $('<li>' + hello_function_anon() + '</li>').appendTo('#msg')
    $('<li>' + hello_function_named.something() + '</li>').appendTo('#msg')
    $('<li>' + hello_object_anon.hello() + '</li>').appendTo('#msg')
  })
}
