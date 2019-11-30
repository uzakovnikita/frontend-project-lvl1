import { getRandom } from '../utils';
import { engine } from '../engine';

const searchOne = (str) => {
    let result = '';
    let i = 0;
    while (str[i] !== ' ') {
        result += str[i];
        i += 1;
    }
    return +result;
}

const searchTwo = (str) => {
    let i = searchOne(str) + '';
    i = i.length;
    let result = '';
    for (i; i < str.length; i++) {
        result += str[i];
    }
    return +result;
}

const gcd = (str) => {
    let a = searchOne(str);
    let b = searchTwo(str);

    const iter = (a, b) => {
        if (b == 0) {
            return a;
        }

        return iter(b, a % b);
    }
    return iter(a, b);
}

const generate = () => {
    let arr = [];
    let a = getRandom();
    let b = getRandom();
    arr[0] = `${a} ${b}`;
    arr[1] = gcd(arr[0]);
    return arr;
}

const description = () => {
    return 'Find the greatest common divisor of given numbers.';
}
export const gcdGames = engine(generate, description);