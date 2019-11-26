// import { getRandom, wrapper } from '..';
import { getRandom } from '..';
import { engine } from '../engine';

// const random = () => getRandom();
// const rules = (x) => {
//     if (isEven(x)) {
//         return 'yes';
//     } else return 'no';
// }
export const isEven = (x) => {
    if (x % 2 === 0) {
        return true;
    }
    return false;
}
const description = () => {
    return 'Answer "yes" if the number is even, otherwise answer "no".'
}
const random = () => {
    let quest = getRandom();
    console.log(`Question: ${quest}`);
    if (isEven(quest)) {
        return 'yes';
    } else return 'no';
}
// export const evenGames = wrapper(random, description, engine);
export const evenGames = engine(random, description);