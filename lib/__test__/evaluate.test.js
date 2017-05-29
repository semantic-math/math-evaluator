import assert from 'assert'
import {parse} from 'math-parser'

import evaluate from '../evaluate'

const evaluateString = (input) => evaluate(parse(input))

describe('evaluate', () => {
    const tests = [
        ['1 + 2 + 3', '6'],
        ['8 - 5', '3'],
        ['2^2', '4'],
        ['2^2^2', '16'],
        ['-2^2', '-4'],
        ['(-2)^2', '4'],
        ['1/2', '0.5'],
        ['1/3', 1/3],
        ['pow(2,2)', '4'],
        ['cos(0)', '1'],
        ['sin(0)', '0'],
        ['gcd(24, 30, 36)', '6'],
        ['lcm(4, 6, 8)', '24'],
        ['nthRoot(4)', '2'],
        ['nthRoot(27, 3)', '3'],
        ['nthRoot(-27, 3)', '-3'],
        // TODO: add 'infin' identifier to context
        // ['nthRoot(0, Infinity)', '0'],
        // ['nthRoot(1, Infinity)', '1'],
    ]

    tests.forEach(t => {
        it(`${t[0]} = ${t[1]}`, () => {
            assert.equal(evaluateString(t[0]), t[1])
        })
    })

    // TODO: test failing cases

    // TODO: add a function that tests whether a node can be evaluated
})
