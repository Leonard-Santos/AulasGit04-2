//import { expect, test } from '@jest/globals';
//import * as calculator from './calculator.js';

const calculator = require('./calculator');

test("Testando soma de 1+1", () => {
    expect(calculator.soma(1,1)).toBe(2);
});

test("Testando divisão de 42/6", () => {
    expect(calculator.divisao(42,6)).toBe(7);
})

test("Testando soma de 5+5", () => {
    expect(calculator.soma(5,5)).toBe(11);
})