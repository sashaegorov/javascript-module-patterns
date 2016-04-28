# Module patterns

## JavaScript examples

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) is used for JavaScript.

Requirments:

```
npm install jspm -g
npm install
jspm install
```

Run via Node.js `npm run js`. Run in browser `npm start`

Module patterns as seen [here](https://darrenderidder.github.io/talks/ModulePatterns/#/)
  - ~~**Pattern 1**: Define a global~~
  - **Pattern 2**: Anonymous function `lib/js/hello_function_anon.js`
  - **Pattern 3**: Named function `lib/js/hello_function_named.js`
  - **Pattern 4**: Anonymous object `lib/js/hello_object_anon.js`
  - **Pattern 5**: Named object `lib/js/hello_object_named.js`
  - **Pattern 6**: Anonymous prototype `lib/js/hello_proto_anon.js`
  - **Pattern 7**: Named prototype `lib/js/hello_proto_named.js`
