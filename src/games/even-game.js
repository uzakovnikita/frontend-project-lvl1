import getRandom from '../utils';
import engine from '../engine';

export const isEven = (x) => {
    const result = (x % 2) ? false : true;
    return result;
}
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateConditions = () => {
    let result = [];
    const question = getRandom(0, 1000);
    let answerTrue = '';
    if (isEven(question)) {
        answerTrue = 'yes';
    } else answerTrue = 'no';
    result = [question, answerTrue];
    return result;
}

export default () => engine(generateConditions, description);
