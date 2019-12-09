import getRandom from '../utils';
import { engine } from '../engine';

const generate = () => {
    // let arr = [];
    // arr[0] = getRandom(0, 100);
    let result = new Map();
    result.set(`question`, `${getRandom(0, 100)}`)
    if (isPrime(result.get(`question`))) {
        result.set(`answerTrue`, `yes`);
    } else result.set(`answerTrue`, `no`);
    return result;
}
const isPrime = (x) => {
    for (let i = 2; i < 10; i++) {
        if (x % i === 0) return false;
    }
    return true;
}
const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
export default () => engine(generate, description);
