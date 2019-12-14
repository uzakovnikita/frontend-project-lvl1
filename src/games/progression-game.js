import getRandom from '../utils';
import engine from '../engine';



const solveProgression = (str) => {
    const arr = str.split(' ');
    const index = arr.indexOf('..');
    let d = 0;
    let result = 0;
    if (index > (arr.length) / 2) {
        d = arr[1] - arr[0];
        result = +arr[0] + d * index;
    } else {
        d = arr[arr.length - 1] - arr[arr.length - 2];
        result = +arr[arr.length - 1] - d * (arr.length - index - 2);
    }
    return result;
}

const generateConditions = () => {
    const a = getRandom(0, 100);
    const d = getRandom(0, 100);
    let resultGlobal = [];
    let arr = [];
    const length = 10;
    for (let i = 0; i < length; i++) {
        if (i == 0) {
            arr[i] = a;
        }
        else arr[i] = d + arr[i - 1];
    }
    let result = '';
    const c = getRandom(0, length - 1);
    for (let j = 0; j < length; j++) {
        if (j == c) {
            result += '.. ';
        }
        else result += arr[j] + ` `;
    }
    const question = result;
    const answerTrue = solveProgression(question);
    resultGlobal = [question, answerTrue];
    return resultGlobal;
}

const description = 'What number is missing in the progression?';
export default () => engine(generateConditions, description);
