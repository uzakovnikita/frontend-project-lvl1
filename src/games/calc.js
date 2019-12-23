import getRandom from '../utils';
import engine from '../engine';


const calculate = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
};

const largestNumber = 100;
const operators = ['-', '+', '*'];
const operatorsCount = operators.length();

const generateConditions = () => {
  const numberOfOperator = getRandom(0, operatorsCount - 1);
  const firstNumber = getRandom(0, largestNumber);
  const secondNumber = getRandom(0, largestNumber);
  const operator = operators[numberOfOperator];
  const question = `${firstNumber} + ${operator} + ${secondNumber}`;
  const trueAnswer = calculate(firstNumber, operator, secondNumber);
  const result = [question, trueAnswer];
  return result;
};

const description = 'What is the result of the expression?';
export default () => engine(generateConditions, description);
