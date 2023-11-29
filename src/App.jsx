import { useState, useEffect } from 'react';
import './App.css';

function getRandomArbitrary(MAX, MIN) {
  return Math.floor(Math.random() * (MAX - MIN) + MIN);
}

function App() {
  const MAX = 20;
  const MIN = 1;
  const [howManySmileys, setHowManySmileys] = useState(0);
  const [randomNumber, setRandomNumber] = useState(
    getRandomArbitrary(MAX, MIN)
  );
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [correct, setCorrect] = useState(false);
  const smiley = '😃';

  const newRandomNumber = () => {
    setRandomNumber(getRandomArbitrary(MAX, MIN));
  };

  const handleGuess = () => {
    const currentGuess = parseInt(guess) || undefined;
    if (currentGuess === randomNumber) {
      setGuesses((prev) => [
        ...prev,
        {
          guess: currentGuess,
          correct: true,
          character: '=',
          message: `You got it! You guessed ${currentGuess} and I my number was ${randomNumber}`,
        },
      ]);
      setCorrect(true);
    } else if (currentGuess > randomNumber) {
      setGuesses((prev) => [
        ...prev,
        {
          guess: currentGuess,
          correct: false,
          character: '>',
          message: `${currentGuess} is bigger than my number!`,
        },
      ]);
    } else if (currentGuess < randomNumber) {
      setGuesses((prev) => [
        ...prev,
        {
          guess: currentGuess,
          correct: false,
          character: '<',
          message: `${currentGuess} is smaller than my number!`,
        },
      ]);
    } else {
      console.log('something went wrong :(');
    }
  };

  return (
    <main>
      <h1>this is my vite + react app deployed to github pages 😃</h1>
      <div>
        <h2>Guess the number!</h2>
        <h2>{randomNumber}</h2>
        {guesses && guesses.length > 0 && (
          <>
            <h3>Your guesses: </h3>
            <ol>
              {guesses.map((g, i) => (
                <li key={i}>{g.message}</li>
              ))}
            </ol>
          </>
        )}

        {guesses && guesses.length < 3 && (
          <label>
            Give a guess
            <input
              type='number'
              min={1}
              max={20}
              onChange={(e) => setGuess(e.target.value)}
            />
            {guess && guess.length > 0 && (
              <button onClick={() => handleGuess()}>submit guess</button>
            )}
          </label>
        )}

        {guesses && guesses.length >= 3 && (
          <div>
            <p>{correct ? 'jee you won!' : 'oh no you lose'}</p>
            <button
              onClick={() => {
                newRandomNumber();
                setCorrect(false);
                setGuess(''), setGuesses([]);
              }}
            >
              Play again?
            </button>
          </div>
        )}
      </div>

      <button onClick={() => setHowManySmileys((prev) => prev + 1)}>
        😃<sup>😃</sup>
      </button>
      <h2>{smiley.repeat(Math.pow(howManySmileys, howManySmileys))}</h2>
    </main>
  );
}

export default App;
