import getRandom from '../utils';
import { engine } from '../engine';

export const isEven = (x) => {
    if (x % 2 === 0) {
        return true;
    }
    return false;
}
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generate = () => {
    let arr = [];
    arr[0] = getRandom();
    if (isEven(arr[0])) {
        arr[1] = 'yes';
    } else arr[1] = 'no';
    return arr;
}

const evenGames = engine(generate, description);
export default evenGames;