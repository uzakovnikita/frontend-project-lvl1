import getRandom from '../utils';
import { engine } from '../engine';

// const searchOne = (str) => {
//     let result = '';
//     let i = 0;
//     while (str[i] !== ' ') {
//         result += str[i];
//         i += 1;
//     }
//     return +result;
// }

// const searchTwo = (str) => {
//     let i = searchOne(str) + '';
//     i = i.length;
//     let result = '';
//     for (i; i < str.length; i++) {
//         result += str[i];
//     }
//     return +result;
// }


const gcd = (a, b) => {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

const generate = () => {
    let arr = [];
    let a = getRandom(0, 100);
    let b = getRandom(0, 100);
    arr[0] = `${a} ${b}`;
    arr[1] = gcd(a, b);
    return arr;
}

const description = 'Find the greatest common divisor of given numbers.';

const gcdGames = engine(generate, description);
export default gcdGames;     