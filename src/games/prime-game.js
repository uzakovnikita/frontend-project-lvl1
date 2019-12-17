import getRandom from '../utils';
import engine from '../engine';

const isPrime = (x) => {
    if (x == 2) {
        return true;
    }
    for (let i = 2; i < x; i++) {
        if (x % i === 0) return false;
    }
    return true;
}
const generateConditions = () => {
    const question = getRandom(0, 100).toString();
    const answerTrue = isPrime(question) ? 'yes' : 'no';
    const result = [question, answerTrue];
    return result;
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
export default () => engine(generateConditions, description, 0);
