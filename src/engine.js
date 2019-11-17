import { hello, succesfulResult, question, personalHello } from "."

export const engine = (random, rules, description, counter = 0) => {
    if (counter == 0) {
        hello();
        description();
        var name = personalHello();
    }
    let quest = random();
    let answerUser = question(quest);
    let answerTrue = rules(quest);
    if (answerTrue == answerUser && counter < 2) {
        console.log('Correct!');
        counter += 1;
        return engine(random, rules, description, counter);
    } else if (answerTrue !== answerUser) {
        console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answerTrue}.`)
    } else if (counter == 2) {
        succesfulResult(name);
    }

}

