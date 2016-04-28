System.registerDynamic("lib/js/hello_function_anon.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function() {
    const message = 'Hello from JavaScript! I\'m anonymous function.';
    return message;
  };
  return module.exports;
});

System.registerDynamic("lib/js/hello_function_named.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.something_named = function() {
    const message = 'Hello from JavaScript! I\'m named function.';
    return message;
  };
  return module.exports;
});

System.register("lib/js/hello_js_browser.js", ["lib/js/hello_function_anon.js", "lib/js/hello_function_named.js"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var hello_function_anon_js_1, hello_function_named_js_1;
    function hello_js_browser() {
        console.log(hello_function_anon_js_1.default());
        console.log(hello_function_named_js_1.default.something_named());
    }
    exports_1("hello_js_browser", hello_js_browser);
    return {
        setters:[
            function (hello_function_anon_js_1_1) {
                hello_function_anon_js_1 = hello_function_anon_js_1_1;
            },
            function (hello_function_named_js_1_1) {
                hello_function_named_js_1 = hello_function_named_js_1_1;
            }],
        execute: function() {
        }
    }
});

System.register("lib/js/main.js", ["lib/js/hello_js_browser.js"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var hello_js_browser_js_1;
    return {
        setters:[
            function (hello_js_browser_js_1_1) {
                hello_js_browser_js_1 = hello_js_browser_js_1_1;
            }],
        execute: function() {
            hello_js_browser_js_1.hello_js_browser();
        }
    }
});

//# sourceMappingURL=main.js.map