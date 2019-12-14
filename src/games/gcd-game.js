import getRandom from '../utils';
import engine from '../engine';

const searchGcd = (a, b) => {
    if (b == 0) {
        return a;
    }
    return searchGcd(b, a % b);
}

const generateConditions = () => {
    let result = [];
    let a = getRandom(0, 100);
    let b = getRandom(0, 100);
    const question = `${a} ${b}`;
    const answerTrue = `${searchGcd(a, b)}`;
    result = [question, answerTrue];
    return result;
}

const description = 'Find the greatest common divisor of given numbers.';

export default () => engine(generateConditions, description);
