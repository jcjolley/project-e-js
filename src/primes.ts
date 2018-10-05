import { LazySeq } from './LazySeq';

let isPrimeHolder;

function* genPrimes() {
  let prime = 2;
  yield prime;
  prime++;
  while (true) {
    while (!isPrimeHolder(prime)) {
      prime += 2;
    }
    yield prime;
    prime += 2;
  }
}

export const primes = new LazySeq(genPrimes)

export const isPrime = n => {
  const possiblePrimeFactors = primes.takeWhile(x => x <= Math.sqrt(n));
  return n > 1 && possiblePrimeFactors.every(x => n % x !== 0);
};
isPrimeHolder = isPrime;