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
    for (const arg of args) {
        const primes = primeFactorization(arg)
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
        const primes = primeFactorization(arg)
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
