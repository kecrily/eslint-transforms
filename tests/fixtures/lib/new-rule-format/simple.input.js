"use strict";

module.exports = function(context) {
    return {
        Program: function(node) {
            context.report({
                node: node,
                message: "Unexpected use of comma operator."
            });
        }
    };
};

module.exports.schema = [];
