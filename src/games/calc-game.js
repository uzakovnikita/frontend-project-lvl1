import getRandom from '../utils';
import engine from '../engine.js';


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
const quantityOfOperators = 3;
const largestNumber = 100;

const generateConditions = () => {
    const numberOfOperator = getRandom(0, quantityOfOperators - 1);
    const firstNumber = getRandom(0, largestNumber);
    const secondNumber = getRandom(0, largestNumber);
    const minus = `-`;
    const plus = `+`;
    const multiplication = `*`;
    const listOfOperators = [minus, plus, multiplication];
    const operator = listOfOperators[numberOfOperator];
    const question = firstNumber.toString() + operator.toString() + secondNumber.toString();
    const answerTrue = calc(firstNumber, operator, secondNumber);
    const result = [question, answerTrue];
    return result;
}

const description = 'What is the result of the expression?';
export default () => engine(generateConditions, description);


