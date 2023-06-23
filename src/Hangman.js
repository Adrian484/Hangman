import React, { useEffect, useState } from 'react';
import Keyboard from './Keyboard';
import Word from './Word';
import RandomWord from './RandomWord';

function Hangman() {
  const [randomWord, setRandomWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [disabledLetters, setDisabledLetters] = useState([]);

  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word')
      .then(response => response.json())
      .then(data => {
        const word = data[0];
        setRandomWord(word);
      })
      .catch(error => {
        console.error('Error fetching random word:', error);
      });
  }, []);

  const handleLetterClick = (letter) => {
    setGuessedLetters([...guessedLetters, letter]);
    setDisabledLetters([...disabledLetters, letter]);
  };

  return (
    <div>
      <h1>Hangman Game</h1>
      <RandomWord word={randomWord} />
      <Word word={randomWord} guessedLetters={guessedLetters} />
      <Keyboard
        letters={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']}
        disabledLetters={disabledLetters}
        onClick={handleLetterClick}
      />
    </div>
  );
}

export default Hangman;