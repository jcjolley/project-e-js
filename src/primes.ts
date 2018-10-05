import { LazySeq } from './LazySeq';

let _isPrime

function* genPrimes() {
  let prime = 2;
  yield prime--;
  while (true) {
    do
      prime += 2
    while (!_isPrime(prime))
    yield prime;
  }
}

export const primes = new LazySeq(genPrimes)

export const isPrime = n => {
  const possiblePrimeFactors = primes.takeWhile(x => x <= Math.sqrt(n));
  return n > 1 && possiblePrimeFactors.every(x => n % x !== 0);
};
_isPrime = isPrime;