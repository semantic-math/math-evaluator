export const primeFactorization = (number, result = []) => {
    const root = Math.sqrt(number)

    let x = 2

    if (number % x) {
        x = 3
        while (number % x && x < root) {
            x = x + 2
        }
    }

    x = x <= root ? x : number

    result.push(x)

    return x === number
        ? result
        : primeFactorization(number / x, result)
}

export const gcd = (...args) => {
    const primeMaps = []
    for (const arg of args.filter(arg => arg !== 0)) {
        const primes = primeFactorization(Math.abs(arg))
        const primeMap = primes.reduce((primeMap, prime) => {
            if (!primeMap.hasOwnProperty(prime)) {
                primeMap[prime] = 1
            } else {
                primeMap[prime]++
            }
            return primeMap
        }, {})
        primeMaps.push(primeMap)
    }

    const factorMap = {}
    for (let key in primeMaps[0]) {
        const value = Math.min(...primeMaps.map(primeMap => primeMap[key]))
        if (value > 0) {
            factorMap[key] = value
        }
    }

    return Object.entries(factorMap).reduce(
        (accum, [key, value]) => accum * Math.pow(key, value), 1)
}

export const lcm = (...args) => {
    const primeMaps = []
    for (const arg of args) {
        const primes = primeFactorization(Math.abs(arg))
        const primeMap = primes.reduce((primeMap, prime) => {
            if (!primeMap.hasOwnProperty(prime)) {
                primeMap[prime] = 1
            } else {
                primeMap[prime]++
            }
            return primeMap
        }, {})
        primeMaps.push(primeMap)
    }

    const factorMap = {}
    for (const primeMap of primeMaps) {
        for (const [key, value] of Object.entries(primeMap)) {
            factorMap[key] = Math.max(value, factorMap[key] || 0)
        }
    }

    return Object.entries(factorMap).reduce(
        (accum, [key, value]) => accum * Math.pow(key, value), 1)
}

// mathjs edge cases, rosetta stone algorithm
export const nthRoot = (num, root = 2, precision = 12) => {
    // e.g 2^-3 = 1/(2^3)
    const inv = root < 0
    if (inv) {
        root = -root
    }

    if (root === 0) {
        throw new Error('Root must be non-zero')
    }
    if (num < 0 && (Math.abs(root) % 2 !== 1)) {
        throw new Error('Root must be odd when a is negative.')
    }

    // Edge cases zero and infinity.
    // e.g 0^3 = 0, 0^-3 = Infinity
    if (num === 0) {
        return inv ? Infinity : 0
    }

    if (num === 1) {
        return 1
    }

    if (!isFinite(num)) {
        return inv ? 0 : num
    }

    // Source: https://rosettacode.org/wiki/Nth_root#JavaScript
    const n = root
    const prec = precision

    let x = 1; // Initial guess
    for (let i = 0; i < prec; i++) {
        x = 1 / n * ((n - 1) * x + (num / Math.pow(x, n - 1)))
    }

    return inv ? 1 / x : x
}