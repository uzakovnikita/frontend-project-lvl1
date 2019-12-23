import readlineSync from 'readline-sync';

const roundsCount = 3;
export default (generateConditions, description) => {
  let nikname = '';
  for (let i = 0; i < roundsCount; i += 1) {
    if (i === 0) {
      console.log('Welcome to the Brain Games!');
      console.log(description);
      nikname = readlineSync.question('May i have you name?');
      console.log(`Hello, ${nikname}!`);
    }
    const conditions = generateConditions();
    const [question, trueAnswer] = conditions;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer ');
    if (trueAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      return;
    }
  }
  console.log(`Congratulations, ${nikname}!`);
};
