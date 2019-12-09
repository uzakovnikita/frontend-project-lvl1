import getRandom from '../utils';
import { engine } from '../engine.js';

const minus = 33;
const plus = 66;
const multiplication = 99;

const calc = (a, b, c) => {
    switch (b) {
        case '+':
            return (+a) + (+c);
            // eslint-disable-next-line no-unreachable
            break;
        case '-':
            return (+a) - (+c);
            // eslint-disable-next-line no-unreachable
            break;
        case '*':
            return (+a) * (+c);
            // eslint-disable-next-line no-unreachable
            break;
    }
}

const generate = () => {
    let operator = getRandom(0, 99);
    let a = getRandom(0, 100);
    let b = getRandom(0, 100);
    // let arr = [];
    if (operator < minus) {
        operator = '-';
    } else if (operator >= minus && operator < plus) {
        operator = '+';
    } else if (operator >= plus && operator < multiplication) operator = '*';
    const result = new Map();
    result.set('question', `${a}${operator}${b}`);
    result.set(`answerTrue`, `${calc(a, operator, b)}`);
    // arr[0] = `${a}${operator}${b}`;
    // arr[1] = calc(a, operator, b);
    return result;
}

const description = 'What is the result of the expression?';
export default () => engine(generate, description);


