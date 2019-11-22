import { getRandom, getRandomTen, wrapper } from '..';
import { engine } from '../engine';

const random = () => {
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

    return result;
}
const rules = (str) => {
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
const description = () => {
    console.log('What number is missing in the progression?');
}
export const progressionGames = wrapper(random, rules, description, engine);