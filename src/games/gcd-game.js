import getRandom from '../utils';
import engine from '../engine';

const searchGcd = (a, b) => {
    if (b == 0) {
        return a;
    }
    return searchGcd(b, a % b);
}

const generateConditions = () => {
    const firstNumber = getRandom(0, 100);
    const secondNumber = getRandom(0, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const answerTrue = searchGcd(firstNumber, secondNumber).toString();
    const result = [question, answerTrue];
    return result;
}

const description = 'Find the greatest common divisor of given numbers.';

export default () => engine(generateConditions, description);
