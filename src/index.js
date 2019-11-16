import readlineSync from 'readline-sync';

export const hello = () => console.log('Welcome to the Brain Games!');

export const actual = readlineSync.question;

export const personalHello = () => {
    const name = actual('May i have you name?');
    console.log(`Hello, ${name}!`);
    return name;
}

export const getRandom = () => {
    return Math.floor(Math.random() * 98) + 2;
}

export const question = (x) => {
    console.log(`Question: ${x}`)
}
export const succesfulResult = (name) => {
    console.log(`Congratulations, ${name}!`);
}

