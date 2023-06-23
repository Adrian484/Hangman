import React from 'react';

const Word = ({ word, guessedLetters }) => {
  const getLetterDisplay = (letter) => {
    if (guessedLetters.includes(letter)) {
      return letter;
    } else {
      return '_';
    }
  };

  return (
    <div>
      {word.split('').map((letter, index) => (
        <span key={index} className="letter">
          {getLetterDisplay(letter)}
          {' '}
        </span>
      ))}
    </div>
  );
};

export default Word;