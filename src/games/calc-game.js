/* eslint-disable import/extensions */
import getRandom from '../utils';
import engine from '../engine.js';

// eslint-disable-next-line consistent-return
const calculate = (firstNumber, operator, secondNumber) => {
  // eslint-disable-next-line default-case
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
  }
};

const largestNumber = 100;
const listOfOperators = ['-', '+', '*'];
const operatorsCount = listOfOperators.length();

const generateConditions = () => {
  const numberOfOperator = getRandom(0, operatorsCount - 1);
  const firstNumber = getRandom(0, largestNumber);
  const secondNumber = getRandom(0, largestNumber);
  const operator = listOfOperators[numberOfOperator];
  const question = firstNumber.toString() + operator.toString() + secondNumber.toString();
  const trueAnswer = calculate(firstNumber, operator, secondNumber);
  const result = [question, trueAnswer];
  return result;
};

const description = 'What is the result of the expression?';
export default () => engine(generateConditions, description);
