import readlineSync from 'readline-sync';
const brainGames = () => {
    console.log('Welcome to the Brain Games!');
    const nikname = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nikname}`);
}
export default brainGames;
