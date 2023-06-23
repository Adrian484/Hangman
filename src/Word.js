import React from 'react';

const Word = ({ word, guessedLetters }) => {
  const displayWord = word
    .split('')
    .map((letter, index) =>
      guessedLetters.includes(letter) ? letter : '_'
    )
    .join(' ');

  return <div>{displayWord}</div>;
};

export default Word;