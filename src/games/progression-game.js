import getRandom from '../utils';
import engine from '../engine';

// const getRandomTen = () => {
//     return Math.floor(Math.random() * 10);
// }

const progressionAnswer = (str) => {
    let arr = str.split(' ');
    let index = arr.indexOf('..');
    let d = 0;
    let result = 0;
    if (index > (arr.length) / 2) {
        d = arr[1] - arr[0];
        result = +arr[0] + d * index;
    } else {
        d = arr[9] - arr[8];
        result = +arr[9] - d * (arr.length - index - 2);
    }
    return result;
}

const generate = () => {

    let a = getRandom(0, 100);
    let d = getRandom(0, 100);
    const resultGlobal = new Map();
    let arr = [];

    for (let i = 0; i < 10; i++) {
        if (i == 0) {
            arr[i] = a;
        }
        else arr[i] = d + arr[i - 1];
    }

    let result = '';
    let c = getRandom(0, 9);

    for (let j = 0; j < 10; j++) {
        if (j == c) {
            result += '.. ';
        }
        else result += arr[j] + ` `;
    }
    resultGlobal.set(`question`, `${result}`);
    resultGlobal.set(`answerTrue`, `${progressionAnswer(resultGlobal.get(`question`))}`)
    // arr[0] = result;
    // arr[1] = progressionAnswer(arr[0]);
    return resultGlobal;
}

const description = 'What number is missing in the progression?';
export default () => engine(generate, description, 0);
