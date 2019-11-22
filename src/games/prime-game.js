import { getRandom, wrapper } from '..';
import { engine } from '../engine';

const random = () => {
    return getRandom();
}
const rules = (x) => {
    for (let i = 2; i < 10; i++) {
        if (x % i === 0) return 'yes';
    }
    return 'no';
}
const description = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
}
export const primeGames = wrapper(random, rules, description, engine);