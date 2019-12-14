import getRandom from '../utils';
import engine from '../engine';

const generateConditions = () => {
    let result = [];
    const question = `${getRandom(0, 100)}`;
    let answerTrue = ''
    if (isPrime(question)) {
        answerTrue = 'yes';
    } else {
        answerTrue = 'no';
    }
    result = [question, answerTrue];
    return result;
}
const isPrime = (x) => {
    if (x == 2) {
        return true;
    }
    for (let i = 2; i < 10; i++) {
        if (x % i === 0) return false;
    }
    return true;
}
const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
export default () => engine(generateConditions, description, 0);
