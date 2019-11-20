import { getRandom } from '..';

export const random = () => {
    return getRandom();
}
export const rules = (x) => {
    for (let i = 2; i < 10; i++) {
        if (x % i === 0) return 'yes';
    }
    return 'no';
}
export const description = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
}