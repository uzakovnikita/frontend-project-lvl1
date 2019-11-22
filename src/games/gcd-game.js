import { getRandom, searchOne, searchTwo, wrapper } from '..';
import { engine } from '../engine';

const random = () => {
    let a = getRandom();
    let b = getRandom();
    return `${a} ${b}`;
}
const rules = (str) => {
    let a = searchOne(str);
    let b = searchTwo(str);

    const gcd = (a, b) => {
        if (b == 0) {
            return a;
        }

        return gcd(b, a % b);
    }
    return gcd(a, b);
}
const description = () => {
    console.log('Find the greatest common divisor of given numbers.');
}
export const gcdGames = wrapper(random, rules, description, engine);