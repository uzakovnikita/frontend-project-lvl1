import getRandom from '../utils';
import engine from '../engine';



const solveProgression = (str) => {
    const progressionArray = str.split(` `);
    const badgeIndex = progressionArray.indexOf(`..`);
    let progressionStep = 0;
    let result = 0;
    if (badgeIndex > (progressionArray.length / 2)) { //if miss in second part
        progressionStep = progressionArray[1] - progressionArray[0];
        result = +progressionArray[0] + progressionStep * badgeIndex;
    } else { //if miss in first part
        progressionStep = progressionArray[progressionArray.length - 1] - progressionArray[progressionArray.length - 2];
        result = +progressionArray[progressionArray.length - 1] - progressionStep * (progressionArray.length - badgeIndex - 1);
    }
    return result;
}

const lengthOfProgression = 10;

const generateConditions = () => {
    const beginningOfProgression = getRandom(0, 100);
    const progressionStep = getRandom(0, 100);
    let progressionArray = [];
    for (let i = 0; i < lengthOfProgression; i++) {
        i == 0 ? progressionArray[i] = beginningOfProgression : progressionArray[i] = progressionStep + progressionArray[i - 1];
    }
    let question = ``;
    const badgeIndex = getRandom(0, lengthOfProgression - 1);
    for (let j = 0; j < lengthOfProgression; j++) {
        if (j == badgeIndex) {
            question += `.. `;
        }
        else if (j == lengthOfProgression - 1) {
            question += progressionArray[j];
        } else {
            question += progressionArray[j] + ` `;
        }
    }
    const answerTrue = solveProgression(question);
    const result = [question, answerTrue];
    return result;
}

const description = `What number is missing in the progression?`;
export default () => engine(generateConditions, description);
