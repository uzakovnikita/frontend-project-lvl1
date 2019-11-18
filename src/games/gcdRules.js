import { getRandom, searchOne, searchTwo } from '..';

// export const random = () => {
//     let a = getRandom();
//     let b = getRandom();
//     let c = getRandom();
//     if (a < 33) {
//         a = '-';
//     } else if (a >= 33 && a < 66) {
//         a = '+';
//     } else a = '*';
//     return `${b}${a}${c}`
// }
// export const rules = (a) => {
//     return eval(a);
// }

export const random = () => {
    let a = getRandom();
    let b = getRandom();
    return `${a} ${b}`;
}
export const rules = (str) => {
    let a = searchOne(str);
    let b = searchTwo(str);

    const gcd = (a, b) => {
        if (b == 0) {
            return a;
        }

        return gcd(b, a % b);
    }
    return gcd(a, b);
}
export const description = () => {
    console.log('Find the greatest common divisor of given numbers.');
}