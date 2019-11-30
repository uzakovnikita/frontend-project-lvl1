import { getRandom } from '../utils';
import { engine } from '../engine';

const generate = () => {
    let arr = [];
    arr[0] = getRandom();
    arr[1] = isPrime(arr[0]);
    return arr;
}
const isPrime = (x) => {
    for (let i = 2; i < 10; i++) {
        if (x % i === 0) return 'no';
    }
    return 'yes';
}
const description = () => {
    return 'Answer "yes" if given number is prime. Otherwise answer "no"';
}
export const primeGames = engine(generate, description);