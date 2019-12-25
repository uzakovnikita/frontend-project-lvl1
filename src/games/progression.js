import engine from '../engine';
import getRandom from '../utils';

const lengthOfProgression = 10;

const generateConditions = () => {
  const beginningOfProgression = getRandom(0, 100);
  const progressionStep = getRandom(0, 100);
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === 0) {
      progression[i] = beginningOfProgression;
    } else {
      progression[i] = progressionStep + progression[i - 1];
    }
  }
  let question = '';
  const hiddenMemberIndex = getRandom(0, lengthOfProgression - 1);
  for (let j = 0; j < lengthOfProgression; j += 1) {
    if (j === hiddenMemberIndex) {
      question = `${question}.. `;
    }
    question = `${question}${progression[j]} `;
  }
  question = question.trim();
  const trueAnswer = progression[hiddenMemberIndex];
  const result = [question, trueAnswer];
  return result;
};

const description = 'What number is missing in the progression?';

export default () => engine(generateConditions, description);
