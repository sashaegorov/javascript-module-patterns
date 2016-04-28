import hello_function_anon from './hello_function_anon.js'
import hello_function_named from './hello_function_named.js'

export function hello_js_browser () {
  console.log(hello_function_anon())
  console.log(hello_function_named.something_named())
}
