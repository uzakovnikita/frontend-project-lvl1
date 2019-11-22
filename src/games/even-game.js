import { getRandom, wrapper, isEven } from '..';
import { engine } from '../engine';

const random = () => getRandom();
const rules = (x) => {
    if (isEven(x)) {
        return 'yes';
    } else return 'no';
}
const description = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
}
export const evenGames = wrapper(random, rules, description, engine);