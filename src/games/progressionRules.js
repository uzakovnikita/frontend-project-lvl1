import { getRandom, searchOne, searchTwo, getRandomTen, searchNext, searchEndOne, reverse, searchEndNext } from '..';

export const random = () => {
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
export const rules = (str) => {
    // let i = 0;
    // while (str[i] !== '.' && str[i + 1] !== '.') {
    //     i += 1;
    // }
    // if (i > str.length / 2) {
    //     let one = searchOne(str);
    //     let next = searchNext(str);
    // } else if (i <= str.length / 2) {
    //     let next = reverse(searchEndOne(str));
    //     let one = reverse(searchEndNext(str));
    // }
    let arr = str.split(' ');
    let index = arr.indexOf('..');
    let d = 0;
    let result = 0;
    if (index > arr.length / 2) {
        d = arr[1] - arr[0];
        result = arr[0] + d * index;
    }
    return result;
}
export const description = () => {
    console.log('What number is missing in the progression?');
}