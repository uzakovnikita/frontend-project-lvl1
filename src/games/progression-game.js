import { getRandom } from '../utils';
import { engine } from '../engine';

export const getRandomTen = () => {
    return Math.floor(Math.random() * 10);
}

const progression = (str) => {
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
    let a = getRandom();
    let d = getRandom();
    let arr = [];

    for (let i = 0; i < 10; i++) {
        if (i == 0) {
            arr[i] = a + d;
        }
        else arr[i] = a + d + arr[i - 1];
    }

    let result = '';
    let c = getRandomTen();

    for (let j = 0; j < 10; j++) {
        if (j == c) {
            result += '.. ';
        }
        else result += arr[j] + ` `;
    }

    arr[0] = result;
    arr[1] = progression(arr[0]);
    return arr;
}

const description = () => {
    return 'What number is missing in the progression?';
}
export const progressionGames = engine(generate, description);