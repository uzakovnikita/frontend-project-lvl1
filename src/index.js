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
    const result = actual('Your answer ');
    return result;
}
export const succesfulResult = (name) => {
    console.log(`Congratulations, ${name}!`);
}

export const searchOne = (str) => {
    let result = '';
    let i = 0;
    while (str[i] !== ' ') {
        result += str[i];
        i += 1;
    }
    return result;
}
export const searchTwo = (str) => {
    let i = searchOne(str) + '';
    i = i.length;
    let result = '';
    for (i; i < str.length; i++) {
        result += str[i];
    }
    return +result;
}