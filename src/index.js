import readlineSync from 'readline-sync';





export const personalHello = () => {
    const name = readlineSync.question('May i have you name?');
    console.log(`Hello, ${name}!`);
    return name;
}

export const getRandom = () => {
    return Math.floor(Math.random() * 100);
}

export const getRandomTen = () => {
    return Math.floor(Math.random() * 10);
}

export const question = (x) => {
    console.log(`Question: ${x}`)
    const result = readlineSync.question('Your answer ');
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
    return +result;
}
export const searchNext = (str) => {
    let start = str + '';
    let result = '';
    let i = 0;
    for (let i; i < start.length; i++) {
        if (str[i] == ' ') {
            break;
        }
    }
    i += 1;
    while (str[i + 1] !== ' ') {
        result += start[i];
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
export const searchEndOne = (str) => {
    let start = '' + str;
    let result = '';
    for (let i = start.length - 1; i >= 0; i--) {
        if (str[i - 1] == ' ') {
            break;
        }
        result += str[i];
    }
    return result;
}
export const searchEndNext = (str) => {
    let start = str + '';
    let result = '';
    let i = start.length - 1;
    for (i; i > 0; i--) {
        if (str[i] == ' ') break;
    }
    i -= 1;
    while (str[i - 1] !== ' ') {
        result += start[i];
        i -= 1;
    }
    return result;
}
export const reverse = (str) => {
    let start = '' + str;
    let result = '';
    for (let i = start.length - 1; i >= 0; i--) {
        result += start[i];
    }
    return result;
}
export const wrapper = (random, rules, description, engine) => () => {
    return engine(random, rules, description);
}
export const isEven = (x) => {
    if (x % 2 === 0) {
        return true;
    }
    return false;
}