import assert from 'assert'

import {primeFactorization, gcd, lcm, nthRoot} from '../functions'

describe('functions', () => {

    describe('primeFactorization', () => {
        it('13 -> 13', () => {
            assert.deepEqual(primeFactorization(13), [13])
        })
        it('30 -> 2 * 3 * 5', () => {
            assert.deepEqual(primeFactorization(30), [2, 3, 5])
        })
        it('24 -> 2 * 2 * 2 * 3', () => {
            assert.deepEqual(primeFactorization(24), [2, 2, 2, 3])
        })
        it('36 -> 2 * 2 * 3 * 3', () => {
            assert.deepEqual(primeFactorization(36), [2, 2, 3, 3])
        })
        it('199 -> 199', () => {
            assert.deepEqual(primeFactorization(199), [199])
        })
    })

    describe('gcd', () => {
        const passTests = [
            [[24, 30, 36], 6],
            [[24, 36], 12],
            [[13, 15], 1],
            [[-24, 36], 12],
            [[-24, -36], 12],
            [[24, -36], 12],
            [[0, 13], 13],
        ]

        passTests.forEach(t => {
            it(`gcd(${t[0].join(', ')}) = ${t[1]}`, () => {
                assert.equal(gcd(...t[0]), t[1])
            })
        })
    })

    describe('lcm', () => {
        const passTests = [
            [[4, 6], 12],
            [[4, 6, 8], 24],
            [[2, 3], 6],
            [[2, 3, 5], 30],
            [[-4, 6], 12],
            [[-4, -6], 12],
        ]

        passTests.forEach(t => {
            it(`lcm(${t[0].join(', ')}) = ${t[1]}`, () => {
                assert.equal(lcm(...t[0]), t[1])
            })
        })
    })

    describe('nthRoot', () => {
        const passTests = [
            [[4], 2],
            [[4, 2], 2],
            [[27, 3], 3],
            [[-27, 3], -3],
            [[Infinity], Infinity],
            [[Infinity, -2], 0],
            [[1, Infinity], 1],
            [[0, Infinity], 0],
        ]

        const nanTests = [
            [2, Infinity],
        ]

        const failTests = [
            [-16, 2],
            [2, 0],
        ]

        passTests.forEach(t => {
            it(`nthRoot(${t[0].join(', ')}) = ${t[1]}`, () => {
                assert.equal(nthRoot(...t[0]), t[1])
            })
        })

        nanTests.forEach(t => {
            it(`nthRoot(${t.join(', ')}) = NaN`, () => {
                assert(Number.isNaN(nthRoot(...t)))
            })
        })

        failTests.forEach(t => {
            it(`nthRoot(${t.join(', ')}) throws`, () => {
                assert.throws(() => nthRoot(...t))
            })
        })
    })
})
