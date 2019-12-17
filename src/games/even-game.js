import getRandom from '../utils';
import engine from '../engine';

export const isEven = (x) => {
    return x % 2 ? false : true;
}
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateConditions = () => {
    const question = getRandom(0, 1000);
    const answerTrue = isEven(question) ? 'yes' : 'no';
    const result = [question, answerTrue];
    return result;
}

export default () => engine(generateConditions, description);
