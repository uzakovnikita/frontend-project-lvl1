import { getRandom } from '..';

export const random = () => {
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
export const rules = (a) => {
    return eval(a);
}

export const description = () => {
    console.log('What is the result of the expression?');
}