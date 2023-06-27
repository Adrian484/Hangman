import React, { useEffect, useState } from 'react';
import './Hangman.css';

function Hangman() {
  const [randomWord, setRandomWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [guessCounter, setGuessCounter] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);
  const [winCount, setWinCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('');
  
  const fetchRandomWord = () => {
    fetch('https://random-word-api.herokuapp.com/word')
      .then(response => response.json())
      .then(data => {
        const word = data[0];
        setRandomWord(word.toUpperCase());
      })
      .catch(error => {
        console.error('Error fetching random word:', error);
      });
  };

  useEffect(() => {
    generateRandomColor();
  }, []);

  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    setBackgroundColor(color);
  };

  const handleBackgroundColorChange = () => {
    generateRandomColor();
  };

  const handleNewGame = () => {
    setGuessCounter(6);
    setGuessedLetters([]);
    setDisabledLetters([]);
    setGameOver(false);
    setGameEnded(false);
    fetchRandomWord();
  };

  const handleReset = () => {
    setGuessCounter(6);
    setWinCount(0);
    setGuessedLetters([]);
    setDisabledLetters([]);
    setGameOver(false);
    setGameEnded(false);
    fetchRandomWord();
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleButtonClick = (letter) => {
    if (gameEnded) {
      return;
    }

    if (guessedLetters.includes(letter.toUpperCase())) {
      return; // Letter already guessed, do nothing
    }

    if (randomWord.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setGuessCounter(guessCounter - 1);
    }

    setDisabledLetters([...disabledLetters, letter.toUpperCase()]);

    const uniqueLetters = [...new Set(randomWord.split(''))];
    const remainingLetters = uniqueLetters.filter((char) => !guessedLetters.includes(char));
    const correctGuesses = remainingLetters.length === 1 && remainingLetters[0] === letter.toUpperCase();

    if (correctGuesses) {
      setGameEnded(true);
      setWinCount(winCount + 1);
    }
  };

  useEffect(() => {
    if (guessCounter === 0) {
      setGameEnded(true);
      setGameOver(true);
    }
  }, [guessCounter]);

  useEffect(() => {
    if (guessedLetters.length === randomWord.length) {
    }
  }, [guessedLetters, randomWord]);

  useEffect(() => {
    fetchRandomWord();
  }, []);

  return (
    <div style={{ backgroundColor }}>
      <h1>HANGMAN</h1>
      <button onClick={handleNewGame}>New Game</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={toggleAnswer}>Answer</button>
      <button onClick={handleBackgroundColorChange}>Change Background Colour</button>
      {showAnswer && <p>{randomWord}</p>}
      {gameOver && <p>You lose! The answer was: {randomWord}</p>}
      {!gameOver && guessedLetters.length === [...new Set(randomWord)].length && <p>You win!</p>}
      <p>Guesses Left: {guessCounter}</p>
      <p>Win Count: {winCount}</p>
      <div className="word-container">
        {randomWord.split('').map((letter, index) => (
          <div key={index} className="letter-container">
            <span className="letter">
              {guessedLetters.includes(letter.toUpperCase()) ? letter.toUpperCase() : ''}
            </span>
            <span className="underline">
              {guessedLetters.includes(letter.toUpperCase()) ? '' : '_'}
            </span>
          </div>
        ))}
      </div>
      <div className="keyboard">
        {['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.split('').map((letter, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(letter)}
                disabled={disabledLetters.includes(letter.toUpperCase())}
                className="button-qwerty"
              >
                {letter}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Hangman;