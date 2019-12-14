/* jshint ignore:start*/
import readlineSync from 'readline-sync';
/* jshint ignore:end */
export default (generateConditions, description, nikname) => {
    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            console.log('Welcome to the Brain Games!');
            console.log(description);
            nikname = readlineSync.question('May i have you name?');
            console.log(`Hello, ${nikname}!`);
        }
        const conditions = generateConditions();
        const question = conditions[0];
        const answerTrue = conditions[1];
        console.log(`Question: ${question}`);
        const answerUser = readlineSync.question('Your answer ')
        if (answerTrue == answerUser && i < 2) {
            console.log('Correct!');
        } else if (answerTrue != answerUser) {
            console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answerTrue}.`)
            break;
        } else if (i == 2) {
            console.log(`Congratulations, ${nikname}!`);
        }
    }
}
