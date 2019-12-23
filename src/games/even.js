import getRandom from '../utils';
import engine from '../engine';

const isEven = (x) => (!(x % 2));
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateConditions = () => {
  const question = getRandom(0, 1000);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  const result = [question, trueAnswer];
  return result;
};

export default () => engine(generateConditions, description);
