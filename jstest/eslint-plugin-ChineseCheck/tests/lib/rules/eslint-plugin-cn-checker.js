/**
 * @fileoverview eslint-plugin-cn-checker
 * @author eslint-plugin-cn-checker
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/eslint-plugin-cn-checker"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("eslint-plugin-cn-checker", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "f--k-failed",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
