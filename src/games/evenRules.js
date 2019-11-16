import { getRandom } from '..';

export const random = () => getRandom();

export const rules = (x) => {
    if (x % 2 === 0) {
        return 'yes';
    } else return 'no';
}
export const description = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
}