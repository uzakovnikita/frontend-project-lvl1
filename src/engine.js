/* jshint ignore:start*/
import readlineSync from 'readline-sync';
/* jshint ignore:end */
export default (generate, description, counter, nikname) => {
    while (counter < 3) {
        if (counter == 0) {
            console.log('Welcome to the Brain Games!');
            console.log(description);
            nikname = readlineSync.question('May i have you name?');
            console.log(`Hello, ${nikname}!`);
        }
        let generateResult = generate();
        let answerTrue = generateResult.get('answerTrue');
        console.log(`Question: ${generateResult.get('question')}`);
        let answerUser = readlineSync.question('Your answer ')
        if (answerTrue == answerUser && counter < 2) {
            console.log('Correct!');
            counter += 1;
        } else if (answerTrue != answerUser) {
            console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answerTrue}.`)
            break;
        } else if (counter == 2) {
            console.log(`Congratulations, ${nikname}!`);
        }
    }
}
