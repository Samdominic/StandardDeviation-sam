"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findStandardDeviation = void 0;
var findStandardDeviation = function (population) {
    var SummationOfPopulation = 0;
    for (var i = 0; i <= population.length - 1; i++) {
        SummationOfPopulation += population[i];
    }
    var Average = SummationOfPopulation / population.length;
    var subtractValue = 0;
    for (var i = 0; i <= population.length - 1; i++) {
        subtractValue += (population[i] - Average) * (population[i] - Average);
    }
    var Total = subtractValue / population.length;
    var squareRoot = Math.sqrt(Total);
    return squareRoot;
};
exports.findStandardDeviation = findStandardDeviation;
