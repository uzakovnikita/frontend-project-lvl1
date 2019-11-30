var readlineSync = require('readline-sync');

export const engine = (random, description, counter = 0, nikname) => () => {

    if (counter == 0) {
        console.log('Welcome to the Brain Games!');
        console.log(description());
        nikname = readlineSync.question('May i have you name?');
        console.log(`Hello, ${nikname}!`);
    }

    let generateResult = random();
    let answerTrue = generateResult[1];
    console.log(`Question: ${generateResult[0]}`);
    let answerUser = readlineSync.question('Your answer ')

    if (answerTrue == answerUser && counter < 2) {
        console.log('Correct!');
        counter += 1;
        return engine(random, description, counter, nikname)();
    } else if (answerTrue != answerUser) {
        console.log(answerTrue == answerUser);
        console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answerTrue}.`)
    } else if (counter == 2) {
        console.log(`Congratulations, ${nikname}!`);
    }

}

