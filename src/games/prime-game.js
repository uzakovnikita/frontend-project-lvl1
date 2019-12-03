import getRandom from '../utils';
import { engine } from '../engine';

const generate = () => {
    let arr = [];
    arr[0] = getRandom(0, 100);
    if (isPrime(arr[0])) {
        arr[1] = 'yes'
    } else arr[1] = 'no';
    return arr;
}
const isPrime = (x) => {
    for (let i = 2; i < 10; i++) {
        if (x % i === 0) return false;
    }
    return true;
}
const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const primeGames = engine(generate, description);
export default primeGames;