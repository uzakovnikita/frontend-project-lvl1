import { getRandom, wrapper } from '..';
import { engine } from '../engine.js'

const random = () => {
    let a = getRandom();
    let b = getRandom();
    let c = getRandom();
    if (a < 33) {
        a = '-';
    } else if (a >= 33 && a < 66) {
        a = '+';
    } else a = '*';
    return `${b}${a}${c}`
}
const rules = (a) => {
    return eval(a);
}

const description = () => {
    console.log('What is the result of the expression?');
}
export const calcGames = wrapper(random, rules, description, engine);

