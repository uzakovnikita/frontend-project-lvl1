import getRandom from '../utils';
import engine from '../engine';

export const isEven = (x) => {
    if (x % 2 === 0) {
        return true;
    }
    return false;
}
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generate = () => {
    // let arr = [];
    let result = new Map();
    result.set(`question`, `${getRandom()}`)
    // arr[0] = getRandom();
    if (isEven(result.get(`question`))) {
        result.set(`answerTrue`, `yes`);
    } else result.set(`answerTrue`, `no`);
    return result;
}

export default () => engine(generate, description, 0);
