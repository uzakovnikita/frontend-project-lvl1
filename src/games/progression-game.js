/* eslint-disable no-unused-expressions */
import engine from '../engine';
import getRandom from '../utils';

const lengthOfProgression = 10;
const generateConditions = () => {
  const beginningOfProgression = getRandom(0, 100);
  const progressionStep = getRandom(0, 100);
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    // eslint-disable-next-line max-len
    i === 0 ? progression[i] = beginningOfProgression : progression[i] = progressionStep + progression[i - 1];
  }
  let question = '';
  const badgeIndex = getRandom(0, lengthOfProgression - 1);
  for (let j = 0; j < lengthOfProgression; j += 1) {
    if (j === badgeIndex) {
      question += '.. ';
    } else if (j === lengthOfProgression - 1) {
      question += progression[j];
    } else {
      question += `${progression[j]} `;
    }
  }
  const trueAnswer = progression[badgeIndex];
  const result = [question, trueAnswer];
  return result;
};
const description = 'What number is missing in the progression?';
export default () => engine(generateConditions, description);
