import React, { useEffect, useState } from 'react';

function Hangman() {
  const [randomWord, setRandomWord] = useState('');

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

  return (
    <div>
      <h1>Hangman Game</h1>
      <p>Random Word: {randomWord}</p>
    </div>
  );
}

export default Hangman;