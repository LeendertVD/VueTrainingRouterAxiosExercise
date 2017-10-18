// simulate brower environment
require('jsdom-global')()

// expose expect to all test files
global.expect = require('expect')