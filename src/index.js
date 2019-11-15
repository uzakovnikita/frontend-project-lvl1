import readlineSync from 'readline-sync';

export const hello = () => console.log('Welcome to the Brain Games!');

const actual = readlineSync.question;

export const personalHello = () => {
    const name = actual('May i have you name?');
    console.log(`Hello, ${name}!`);
    return name;
}

export const description = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
}

const getRandom = () => {
    return Math.floor(Math.random() * 98) + 2;
}

const question = (x) => {
    console.log(`Question: ${x}`)
}

export const games = (counter = 0, name) => {
    let quest, answ;
    quest = getRandom();
    question(quest);
    answ = actual('Your answer: ');
    if ((answ === 'yes' && quest % 2 === 0 || answ === 'no' && quest % 2 !== 0) && counter < 2) {
        console.log('Correct');
        return games(counter += 1, name);
    } else if (counter >= 2) {
        console.log(`Congratulations, ${name}!`);
    } else if (quest % 2 == 0 && answ !== 'yes') {
        console.log(`no' is wrong answer ;(. Correct answer was 'yes'. \n
        Let's try again, ${name}!`)
    } else {
        console.log(`yes' is wrong answer ;(. Correct answer was 'no'. \n
        Let's try again, ${name}!`)
    }
}

