import getRandom from '../utils';
import engine from '../engine.js';

const cons = (a, b) => (message) => {
    switch (message) {
        case `car`:
            return a;
        case `cdr`:
            return b;
    }
}
const car = (pair) => pair('car');
const cdr = (pair) => pair('cdr');

const calc = (a, b, c) => {
    switch (b) {
        case '+':
            return (+a) + (+c);
        case '-':
            return (+a) - (+c);
        case '*':
            return (+a) * (+c);
    }
}

const generateConditions = () => {
    let operator = getRandom(0, 2);
    const a = getRandom(0, 100);
    const b = getRandom(0, 100);
    const minus = cons(0, `-`);
    const plus = cons(1, '+');
    const multiplication = cons(2, `*`);
    const listOfOperators = [minus, plus, multiplication];
    switch (operator) {
        case car(listOfOperators[0]):
            operator = cdr(listOfOperators[0])
            break;
        case car(listOfOperators[1]):
            operator = cdr(listOfOperators[1]);
            break;
        case car(listOfOperators[2]):
            operator = cdr(listOfOperators[2]);
            break;
    }
    let result = [];
    const question = `${a}${operator}${b}`;
    const answerTrue = `${calc(a, operator, b)}`;
    result = [question, answerTrue];
    return result;
}

const description = 'What is the result of the expression?';
export default () => engine(generateConditions, description);


