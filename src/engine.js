import readlineSync from 'readline-sync';

const numberOfRounds = 3;
export default (generateConditions, description, nikname) => {
  for (let i = 0; i < numberOfRounds; i += 1) {
    if (i === 0) {
      console.log('Welcome to the Brain Games!');
      console.log(description);
      // eslint-disable-next-line no-param-reassign
      nikname = readlineSync.question('May i have you name?');
      console.log(`Hello, ${nikname}!`);
    }
    const conditions = generateConditions();
    const question = conditions[0];
    const trueAnswer = conditions[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer ');
    if (trueAnswer === userAnswer && i < numberOfRounds - 1) {
      console.log('Correct!');
    } else if (trueAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      return;
    }
  }
  console.log(`Congratulations, ${nikname}!`);
};
