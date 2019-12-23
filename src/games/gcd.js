import getRandom from '../utils';
import engine from '../engine';

const searchGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return searchGcd(secondNumber, firstNumber % secondNumber);
};
const generateConditions = () => {
  const firstNumber = getRandom(0, 100);
  const secondNumber = getRandom(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const trueAnswer = searchGcd(firstNumber, secondNumber).toString();
  const result = [question, trueAnswer];
  return result;
};
const description = 'Find the greatest common divisor of given numbers.';
export default () => engine(generateConditions, description);
