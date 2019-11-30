import readlineSync from 'readline-sync';
export const brainGames = () => {
    console.log('Welcome to the Brain Games!');
    const nikname = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nikname}`);
}
