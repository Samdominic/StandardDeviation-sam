"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
test('My Module', function () {
    expect((0, index_1.findStandardDeviation)([1, 2, 3, 4, 5])).toBe(1.4142135623730951);
});
