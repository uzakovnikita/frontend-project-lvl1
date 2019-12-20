import engine from '../engine';
import getRandom from '../utils';

const isPrime = (x) => {
  if (x === 2) {
    return true;
  } if (x < 1) {
    return false;
  }
  for (let i = 3; i < x / 2; i += 1) {
    if (x % i === 0) return false;
  }
  return true;
};
const generateConditions = () => {
  const question = getRandom(0, 100).toString();
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  const result = [question, trueAnswer];
  return result;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
export default () => engine(generateConditions, description, 0);
