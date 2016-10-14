'use strict';

var rule = require('../lib/camelcase-ohm');
var RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();
ruleTester.run('camelcase-ohm', rule, {
  valid: [
    'var regularCamelCase',
    'var AddExp_plus',
    'var _leadingUnderscore'
  ],
  invalid: [
    {
      code: 'var AddExp_plus_',
      errors: [{message: "Identifier 'AddExp_plus_' is not camel case."}]
    },
    {
      code: 'var a_b_c',
      errors: [{message: "Identifier 'a_b_c' is not camel case."}]
    }
  ]
});
