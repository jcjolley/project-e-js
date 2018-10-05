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

// Testing
export const isPrime = n => {
  if (primes.has(n)) {
    return true;
  }

  const rootN = Math.sqrt(n);
  let i = 1;
  let prime = primes.nth(0);
  while (prime <= rootN) {
    if (n % prime === 0) {
      return false;
    }
    prime = primes.nth(i++);
  }

  return n > 1;
};
_isPrime = isPrime;