import { getRandom } from '../utils';
import { engine } from '../engine.js';

const generate = () => {
    let a = getRandom();
    let b = getRandom();
    let c = getRandom();
    let arr = [];
    if (a < 33) {
        a = '-';
    } else if (a >= 33 && a < 66) {
        a = '+';
    } else a = '*';
    arr[0] = `${b}${a}${c}`;
    arr[1] = eval(arr[0]);
    return arr;
}

const description = () => {
    return 'What is the result of the expression?';
}
export const calcGames = engine(generate, description);

